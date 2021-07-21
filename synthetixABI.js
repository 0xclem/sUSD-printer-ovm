module.exports = [
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_proxy',
				type: 'address',
			},
			{
				internalType: 'contract TokenState',
				name: '_tokenState',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_totalSupply',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_resolver',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
		signature: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
		signature: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'name',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'destination',
				type: 'address',
			},
		],
		name: 'CacheUpdated',
		type: 'event',
		signature: '0x88a93678a3692f6789d9546fc621bf7234b101ddb7d4fe479455112831b8aa68',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'ExchangeRebate',
		type: 'event',
		signature: '0x93751433c6897553c8950f14ccc193ccffb8f539f7421ffde9af83b9b7dae1a8',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'ExchangeReclaim',
		type: 'event',
		signature: '0x491df6adf9cabe8ca514806effd6b6b6475572dc88fe4b8b58d0a20ecf45e105',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'trackingCode',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'toCurrencyKey',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'toAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		name: 'ExchangeTracking',
		type: 'event',
		signature: '0x598db110c31345e2c4418fa8a5d4e125f3526f24b214150e19d76e5889ed120b',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldOwner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnerChanged',
		type: 'event',
		signature: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnerNominated',
		type: 'event',
		signature: '0x906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'proxyAddress',
				type: 'address',
			},
		],
		name: 'ProxyUpdated',
		type: 'event',
		signature: '0xfc80377ca9c49cc11ae6982f390a42db976d5530af7c43889264b13fbbd7c57e',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'fromCurrencyKey',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fromAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'toCurrencyKey',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'toAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'toAddress',
				type: 'address',
			},
		],
		name: 'SynthExchange',
		type: 'event',
		signature: '0x65b6972c94204d84cffd3a95615743e31270f04fdf251f3dccc705cfbad44776',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'newTokenState',
				type: 'address',
			},
		],
		name: 'TokenStateUpdated',
		type: 'event',
		signature: '0xa538c4dcfe9fb148efee2952bafe34982d2d07d5fbb38ae5b44abf659a46bfd8',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
		signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
	},
	{
		constant: true,
		inputs: [],
		name: 'CONTRACT_NAME',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x614d08f8',
	},
	{
		constant: true,
		inputs: [],
		name: 'DECIMALS',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x2e0f2625',
	},
	{
		constant: true,
		inputs: [],
		name: 'TOKEN_NAME',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x18821400',
	},
	{
		constant: true,
		inputs: [],
		name: 'TOKEN_SYMBOL',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x2a905318',
	},
	{
		constant: false,
		inputs: [],
		name: 'acceptOwnership',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x79ba5097',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
		],
		name: 'allowance',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xdd62ed3e',
	},
	{
		constant: true,
		inputs: [],
		name: 'anySynthOrSNXRateIsInvalid',
		outputs: [
			{
				internalType: 'bool',
				name: 'anyRateInvalid',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x4e99bda9',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x095ea7b3',
	},
	{
		constant: true,
		inputs: [],
		name: 'availableCurrencyKeys',
		outputs: [
			{
				internalType: 'bytes32[]',
				name: '',
				type: 'bytes32[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x72cb051f',
	},
	{
		constant: true,
		inputs: [],
		name: 'availableSynthCount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xdbf63340',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'availableSynths',
		outputs: [
			{
				internalType: 'contract ISynth',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x835e119c',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x70a08231',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'burnSecondary',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xedef719a',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'burnSynths',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x295da87d',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'burnForAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'burnSynthsOnBehalf',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xc2bf3880',
	},
	{
		constant: false,
		inputs: [],
		name: 'burnSynthsToTarget',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x9741fb22',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'burnForAddress',
				type: 'address',
			},
		],
		name: 'burnSynthsToTargetOnBehalf',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x2c955fa7',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'collateral',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xa5fdc5de',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '_issuer',
				type: 'address',
			},
		],
		name: 'collateralisationRatio',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xa311c7c2',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
		],
		name: 'debtBalanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xd37c4d8b',
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x313ce567',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'emitExchangeRebate',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x6f01a986',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'emitExchangeReclaim',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xace88afd',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bytes32',
				name: 'trackingCode',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'toCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'toAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		name: 'emitExchangeTracking',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x2d3169eb',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'fromCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'fromAmount',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: 'toCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'toAmount',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'toAddress',
				type: 'address',
			},
		],
		name: 'emitSynthExchange',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x6c00f310',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bytes32',
				name: 'sourceCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'sourceAmount',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: 'destinationCurrencyKey',
				type: 'bytes32',
			},
		],
		name: 'exchange',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountReceived',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xee52a2f3',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'exchangeForAddress',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'sourceCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'sourceAmount',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: 'destinationCurrencyKey',
				type: 'bytes32',
			},
		],
		name: 'exchangeOnBehalf',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountReceived',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xc836fa0a',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'exchangeForAddress',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'sourceCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'sourceAmount',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: 'destinationCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'rewardAddress',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'trackingCode',
				type: 'bytes32',
			},
		],
		name: 'exchangeOnBehalfWithTracking',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountReceived',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x91e56b68',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bytes32',
				name: 'sourceCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'sourceAmount',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: 'destinationCurrencyKey',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'rewardAddress',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'trackingCode',
				type: 'bytes32',
			},
		],
		name: 'exchangeWithTracking',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountReceived',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x30ead760',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'exchangeWithTrackingForInitiator',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountReceived',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x5af090ef',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'exchangeWithVirtual',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'contract IVirtualSynth',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x0e30963c',
	},
	{
		constant: true,
		inputs: [],
		name: 'integrationProxy',
		outputs: [
			{
				internalType: 'contract Proxy',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x9cbdaeb6',
	},
	{
		constant: true,
		inputs: [],
		name: 'isResolverCached',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x2af64bd3',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
		],
		name: 'isWaitingPeriod',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x1fce304d',
	},
	{
		constant: false,
		inputs: [],
		name: 'issueMaxSynths',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xaf086c7e',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'issueForAddress',
				type: 'address',
			},
		],
		name: 'issueMaxSynthsOnBehalf',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x320223db',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'issueSynths',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x8a290014',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'issueForAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'issueSynthsOnBehalf',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xe8e09b8b',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'liquidateDelinquentAccount',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xe6203ed1',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'maxIssuableSynths',
		outputs: [
			{
				internalType: 'uint256',
				name: 'maxIssuable',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x05b3c1c9',
	},
	{
		constant: true,
		inputs: [],
		name: 'messageSender',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xd67bdd25',
	},
	{
		constant: false,
		inputs: [],
		name: 'mint',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x1249c58b',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'mintSecondary',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x666ed4f1',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'mintSecondaryRewards',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xd8a1f76f',
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x06fdde03',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
		],
		name: 'nominateNewOwner',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x1627540c',
	},
	{
		constant: true,
		inputs: [],
		name: 'nominatedOwner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x53a47bb7',
	},
	{
		constant: true,
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x8da5cb5b',
	},
	{
		constant: true,
		inputs: [],
		name: 'proxy',
		outputs: [
			{
				internalType: 'contract Proxy',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xec556889',
	},
	{
		constant: false,
		inputs: [],
		name: 'rebuildCache',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x74185360',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'remainingIssuableSynths',
		outputs: [
			{
				internalType: 'uint256',
				name: 'maxIssuable',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'alreadyIssued',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalSystemDebt',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x1137aedf',
	},
	{
		constant: true,
		inputs: [],
		name: 'resolver',
		outputs: [
			{
				internalType: 'contract AddressResolver',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x04f3bcec',
	},
	{
		constant: true,
		inputs: [],
		name: 'resolverAddressesRequired',
		outputs: [
			{
				internalType: 'bytes32[]',
				name: 'addresses',
				type: 'bytes32[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x899ffef4',
	},
	{
		constant: true,
		inputs: [],
		name: 'sUSD',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x9324cac7',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address payable',
				name: '_integrationProxy',
				type: 'address',
			},
		],
		name: 'setIntegrationProxy',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x131b0ae7',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'setMessageSender',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xbc67f832',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address payable',
				name: '_proxy',
				type: 'address',
			},
		],
		name: 'setProxy',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x97107d6d',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract TokenState',
				name: '_tokenState',
				type: 'address',
			},
		],
		name: 'setTokenState',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x9f769807',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
		],
		name: 'settle',
		outputs: [
			{
				internalType: 'uint256',
				name: 'reclaimed',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'refunded',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'numEntriesSettled',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x987757dd',
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x95d89b41',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
		],
		name: 'synths',
		outputs: [
			{
				internalType: 'contract ISynth',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x32608039',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'synthAddress',
				type: 'address',
			},
		],
		name: 'synthsByAddress',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x16b2213f',
	},
	{
		constant: true,
		inputs: [],
		name: 'tokenState',
		outputs: [
			{
				internalType: 'contract TokenState',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xe90dd9e2',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
		],
		name: 'totalIssuedSynths',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x83d625d4',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'bytes32',
				name: 'currencyKey',
				type: 'bytes32',
			},
		],
		name: 'totalIssuedSynthsExcludeEtherCollateral',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xd60888e4',
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x18160ddd',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'transfer',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xa9059cbb',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0x23b872dd',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'transferableSynthetix',
		outputs: [
			{
				internalType: 'uint256',
				name: 'transferable',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x6ac0bf9c',
	},
];
