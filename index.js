const contractsInterface = require('@synthetixio/contracts-interface');
const ethers = require('ethers');
const synthetixABI = require('./synthetixABI');

const { synthetix } = contractsInterface;
const { Wallet, providers, utils, Contract } = ethers;

const WALLET_PK = '';
const JSON_RPC_URL = 'https://kovan.optimism.io';
const SYNTHETIX_UNDERLYING_ADDRESS = '0x88477360d0d9452f326C0B4529D8e117B0464af1';

const gasPrice = utils.parseUnits('0.015', 'gwei');
const gasLimit = 9000000;

const init = async () => {
	try {
		const provider = new providers.JsonRpcProvider(JSON_RPC_URL);
		const wallet = new Wallet(WALLET_PK, provider);
		const snxJS = synthetix({ signer: wallet, provider, networkId: 69 });

		//Using underlying contract here because contracts-interface returns proxy, which doesn't work.
		const synthetixContract = new Contract(SYNTHETIX_UNDERLYING_ADDRESS, synthetixABI, wallet);

		const {
			contracts: {
				AddressResolver,
				SynthetixBridgeToBase,
				ReadProxyAddressResolver,
				DebtCache,
				Synthetix,
				ExchangeRates,
			},
		} = snxJS;

		const bridgeName = utils.formatBytes32String('SynthetixBridgeToBase');
		const bridgeAddress = SynthetixBridgeToBase.address;

		let tx;
		tx = await AddressResolver.importAddresses([bridgeName], [wallet.address], {
			gasPrice,
			gasLimit,
		});
		await tx.wait();
		console.log('Address imported');

		tx = await AddressResolver.rebuildCaches([synthetixContract.address], {
			gasPrice,
			gasLimit,
		});
		await tx.wait();
		console.log('Cache rebuilt');

		tx = await synthetixContract.mintSecondary(wallet.address, '1000000000000000000000', {
			gasPrice,
			gasLimit,
		});
		await tx.wait();
		console.log('Minted');

		tx = await AddressResolver.importAddresses([bridgeName], [bridgeAddress], {
			gasPrice,
			gasLimit,
		});
		await tx.wait();
		console.log('Address reimported');

		tx = await AddressResolver.rebuildCaches([synthetixContract.address], {
			gasPrice,
			gasLimit,
		});
		await tx.wait();
		console.log('Cache rebuilt');
		tx = await DebtCache.takeDebtSnapshot({
			gasPrice,
			gasLimit,
		});
		await tx.wait();
		console.log('Debt snapshot');

		tx = await Synthetix.issueMaxSynths({ gasPrice, gasLimit });
		await tx.wait();
		console.log('sUSD minted');
	} catch (e) {
		console.log(e);
	}
};

// const updateRates = () => {
// 	tx = await ExchangeRates.updateRates(
// 		[
// 			utils.formatBytes32String('SNX'),
// 			utils.formatBytes32String('sBTC'),
// 			utils.formatBytes32String('sETH'),
// 			utils.formatBytes32String('sLINK'),
// 		],
// 		[
// 			utils.parseEther('10'),
// 			utils.parseEther('30000'),
// 			utils.parseEther('1800'),
// 			utils.parseEther('100'),
// 		],
// 		1626847752
// 	);

// 	await tx.wait();

// tx = await ExchangeRates.rateIsStale(utils.formatBytes32String('SNX'));
// console.log(tx);
// tx = await ExchangeRates.rateIsStale(utils.formatBytes32String('sETH'));
// console.log(tx);
// tx = await ExchangeRates.rateIsStale(utils.formatBytes32String('sBTC'));
// console.log(tx);
// tx = await ExchangeRates.rateIsStale(utils.formatBytes32String('sLINK'));
// console.log(tx);

// }

init();
