import { Welcome } from './types';

export const API_URL = process.env.REACT_APP_CRYPTO_API_URL || '';
export const API_KEY = process.env.REACT_APP_CRYPTO_API_KEY || '';

export const NAME_RESP: Welcome = {
	Message: 'Success',
	Type: 100,
	MetaData: {
		Count: 3987,
	},
	SponsoredData: [],
	Data: [
		{
			CoinInfo: {
				Id: '1182',
				Name: 'BTC',
				FullName: 'Bitcoin',
				Internal: 'BTC',
				ImageUrl: '/media/37746251/btc.png',
				Url: '/coins/btc/overview',
				Algorithm: 'SHA-256',
				ProofType: 'PoW',
				Rating: {
					Weiss: {
						Rating: 'B+',
						TechnologyAdoptionRating: 'A-',
						MarketPerformanceRating: 'D',
					},
				},
				NetHashesPerSecond: 585044710332619200000,
				BlockNumber: 863521,
				BlockTime: 600,
				BlockReward: 3.125,
				AssetLaunchDate: '2009-01-03',
				MaxSupply: 20999999.9769,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {},
			DISPLAY: {},
		},
		{
			CoinInfo: {
				Id: '7605',
				Name: 'ETH',
				FullName: 'Ethereum',
				Internal: 'ETH',
				ImageUrl: '/media/37746238/eth.png',
				Url: '/coins/eth/overview',
				Algorithm: 'Ethash',
				ProofType: 'PoS',
				Rating: {
					Weiss: {
						Rating: 'B-',
						TechnologyAdoptionRating: 'B',
						MarketPerformanceRating: 'D',
					},
				},
				NetHashesPerSecond: 0,
				BlockNumber: 20864724,
				BlockTime: 12,
				BlockReward: 2.044338104121828,
				AssetLaunchDate: '2015-07-30',
				MaxSupply: -1,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'ETH',
					TOSYMBOL: 'USD',
					FLAGS: '2',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 2602.90204186601,
					TOPTIERVOLUME24HOUR: 563236.92945501,
					TOPTIERVOLUME24HOURTO: 1482293829.95996,
					LASTTRADEID: '361259036',
					PRICE: 2602.90204186601,
					LASTUPDATE: 1727715273,
					LASTVOLUME: 0.68172246,
					LASTVOLUMETO: 1774.3804016634,
					VOLUMEHOUR: 34563.08684913,
					VOLUMEHOURTO: 89980878.4072049,
					OPENHOUR: 2596.01597941792,
					HIGHHOUR: 2609.88980898203,
					LOWHOUR: 2590.24420139839,
					VOLUMEDAY: 439615.96939024,
					VOLUMEDAYTO: 1153140544.37651,
					OPENDAY: 2658.07795445426,
					HIGHDAY: 2663.73677362463,
					LOWDAY: 2590.24420139839,
					VOLUME24HOUR: 563236.92945501,
					VOLUME24HOURTO: 1482293829.95996,
					OPEN24HOUR: 2664.77091555006,
					HIGH24HOUR: 2673.94542822372,
					LOW24HOUR: 2590.24420139839,
					CHANGE24HOUR: -61.86887368404996,
					CHANGEPCT24HOUR: -2.321733298837023,
					CHANGEDAY: -55.17591258824996,
					CHANGEPCTDAY: -2.075782333463517,
					CHANGEHOUR: 6.8860624480903425,
					CHANGEPCTHOUR: 0.265255010087971,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715273,
					SUPPLY: 120367971.813689,
					MKTCAP: 313306039609.12146,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 120367971.813689,
					CIRCULATINGSUPPLYMKTCAP: 313306039609.12146,
					TOTALVOLUME24H: 3566072.62905427,
					TOTALVOLUME24HTO: 9298381003.835024,
					TOTALTOPTIERVOLUME24H: 2542268.73151062,
					TOTALTOPTIERVOLUME24HTO: 6633519748.448277,
					IMAGEURL: '/media/37746238/eth.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'Ξ',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'Ξ 563,236.9',
					TOPTIERVOLUME24HOURTO: '$ 1,482,293,830.0',
					LASTTRADEID: '361259036',
					PRICE: '$ 2,602.90',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'Ξ 0.6817',
					LASTVOLUMETO: '$ 1,774.38',
					VOLUMEHOUR: 'Ξ 34,563.1',
					VOLUMEHOURTO: '$ 89,980,878.4',
					OPENHOUR: '$ 2,596.02',
					HIGHHOUR: '$ 2,609.89',
					LOWHOUR: '$ 2,590.24',
					VOLUMEDAY: 'Ξ 439,616.0',
					VOLUMEDAYTO: '$ 1,153,140,544.4',
					OPENDAY: '$ 2,658.08',
					HIGHDAY: '$ 2,663.74',
					LOWDAY: '$ 2,590.24',
					VOLUME24HOUR: 'Ξ 563,236.9',
					VOLUME24HOURTO: '$ 1,482,293,830.0',
					OPEN24HOUR: '$ 2,664.77',
					HIGH24HOUR: '$ 2,673.95',
					LOW24HOUR: '$ 2,590.24',
					CHANGE24HOUR: '$ -61.87',
					CHANGEPCT24HOUR: '-2.32',
					CHANGEDAY: '$ -55.18',
					CHANGEPCTDAY: '-2.08',
					CHANGEHOUR: '$ 6.89',
					CHANGEPCTHOUR: '0.27',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'Ξ 120,367,971.8',
					MKTCAP: '$ 313.31 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'Ξ 120,367,971.8',
					CIRCULATINGSUPPLYMKTCAP: '$ 313.31 B',
					TOTALVOLUME24H: 'Ξ 3.57 M',
					TOTALVOLUME24HTO: '$ 9.30 B',
					TOTALTOPTIERVOLUME24H: 'Ξ 2.54 M',
					TOTALTOPTIERVOLUME24HTO: '$ 6.63 B',
					IMAGEURL: '/media/37746238/eth.png',
				},
			},
		},
		{
			CoinInfo: {
				Id: '934443',
				Name: 'SOL',
				FullName: 'Solana',
				Internal: 'SOL',
				ImageUrl: '/media/37747734/sol.png',
				Url: '/coins/sol/overview',
				Algorithm: 'N/A',
				ProofType: 'PoH',
				Rating: {
					Weiss: {
						Rating: 'D+',
						TechnologyAdoptionRating: 'D',
						MarketPerformanceRating: 'C',
					},
				},
				NetHashesPerSecond: 0,
				BlockNumber: 271758728,
				BlockTime: 0.637,
				BlockReward: 0,
				AssetLaunchDate: '2020-03-31',
				MaxSupply: -1,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'SOL',
					TOSYMBOL: 'USD',
					FLAGS: '1',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 154.621910988277,
					TOPTIERVOLUME24HOUR: 1118849.80795802,
					TOPTIERVOLUME24HOURTO: 175959098.437097,
					LASTTRADEID: '104405739',
					PRICE: 154.621910988277,
					LASTUPDATE: 1727715281,
					LASTVOLUME: 1.201,
					LASTVOLUMETO: 185.71063,
					VOLUMEHOUR: 42608.03638236,
					VOLUMEHOURTO: 6591378.28790562,
					OPENHOUR: 154.164579461694,
					HIGHHOUR: 155.116127650135,
					LOWHOUR: 154.095872354819,
					VOLUMEDAY: 736707.07601469,
					VOLUMEDAYTO: 115023392.078757,
					OPENDAY: 158.521597787235,
					HIGHDAY: 159.73006687851,
					LOWDAY: 153.752776094696,
					VOLUME24HOUR: 1118849.80795802,
					VOLUME24HOURTO: 175959098.437097,
					OPEN24HOUR: 157.413853793422,
					HIGH24HOUR: 161.734033435264,
					LOW24HOUR: 153.752776094696,
					CHANGE24HOUR: -2.7919428051449984,
					CHANGEPCT24HOUR: -1.7736322044493824,
					CHANGEDAY: -3.8996867989580153,
					CHANGEPCTDAY: -2.4600350068336483,
					CHANGEHOUR: 0.4573315265830047,
					CHANGEPCTHOUR: 0.2966514929563571,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715281,
					SUPPLY: 585684035.0419773,
					MKTCAP: 90559584733.51553,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 468220583.929972,
					CIRCULATINGSUPPLYMKTCAP: 72397161451.29921,
					TOTALVOLUME24H: 13419431.596943,
					TOTALVOLUME24HTO: 2077898560.9175537,
					TOTALTOPTIERVOLUME24H: 10697350.79221456,
					TOTALTOPTIERVOLUME24HTO: 1657005225.0259354,
					IMAGEURL: '/media/37747734/sol.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'SOL',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'SOL 1,118,849.8',
					TOPTIERVOLUME24HOURTO: '$ 175,959,098.4',
					LASTTRADEID: '104405739',
					PRICE: '$ 154.62',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'SOL 1.20',
					LASTVOLUMETO: '$ 185.71',
					VOLUMEHOUR: 'SOL 42,608.0',
					VOLUMEHOURTO: '$ 6,591,378.3',
					OPENHOUR: '$ 154.16',
					HIGHHOUR: '$ 155.12',
					LOWHOUR: '$ 154.10',
					VOLUMEDAY: 'SOL 736,707.1',
					VOLUMEDAYTO: '$ 115,023,392.1',
					OPENDAY: '$ 158.52',
					HIGHDAY: '$ 159.73',
					LOWDAY: '$ 153.75',
					VOLUME24HOUR: 'SOL 1,118,849.8',
					VOLUME24HOURTO: '$ 175,959,098.4',
					OPEN24HOUR: '$ 157.41',
					HIGH24HOUR: '$ 161.73',
					LOW24HOUR: '$ 153.75',
					CHANGE24HOUR: '$ -2.79',
					CHANGEPCT24HOUR: '-1.77',
					CHANGEDAY: '$ -3.90',
					CHANGEPCTDAY: '-2.46',
					CHANGEHOUR: '$ 0.46',
					CHANGEPCTHOUR: '0.30',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'SOL 585,684,035.0',
					MKTCAP: '$ 90.56 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'SOL 468,220,583.9',
					CIRCULATINGSUPPLYMKTCAP: '$ 72.40 B',
					TOTALVOLUME24H: 'SOL 13.42 M',
					TOTALVOLUME24HTO: '$ 2.08 B',
					TOTALTOPTIERVOLUME24H: 'SOL 10.70 M',
					TOTALTOPTIERVOLUME24HTO: '$ 1.66 B',
					IMAGEURL: '/media/37747734/sol.png',
				},
			},
		},
		{
			CoinInfo: {
				Id: '5031',
				Name: 'XRP',
				FullName: 'XRP',
				Internal: 'XRP',
				ImageUrl: '/media/38553096/xrp.png',
				Url: '/coins/xrp/overview',
				Algorithm: 'N/A',
				ProofType: 'XRP LCP',
				Rating: {
					Weiss: {
						Rating: 'B-',
						TechnologyAdoptionRating: 'B-',
						MarketPerformanceRating: 'C-',
					},
				},
				NetHashesPerSecond: 0,
				BlockNumber: 91105465,
				BlockTime: 4,
				BlockReward: 0,
				AssetLaunchDate: '2012-09-26',
				MaxSupply: 100000000000,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'XRP',
					TOSYMBOL: 'USD',
					FLAGS: '1',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 0.619928523467479,
					TOPTIERVOLUME24HOUR: 191322373.055459,
					TOPTIERVOLUME24HOURTO: 122337797.691117,
					LASTTRADEID: '49348752',
					PRICE: 0.619928523467479,
					LASTUPDATE: 1727715273,
					LASTVOLUME: 75,
					LASTVOLUMETO: 46.4835,
					VOLUMEHOUR: 7041401.17866299,
					VOLUMEHOURTO: 4363365.41724875,
					OPENHOUR: 0.617625135532543,
					HIGHHOUR: 0.621501976296125,
					LOWHOUR: 0.616746935445582,
					VOLUMEDAY: 142458729.95865,
					VOLUMEDAYTO: 90721430.8726183,
					OPENDAY: 0.641373003063636,
					HIGHDAY: 0.654510192432362,
					LOWDAY: 0.616746935445582,
					VOLUME24HOUR: 191322373.055459,
					VOLUME24HOURTO: 122337797.691117,
					OPEN24HOUR: 0.65326552076581,
					HIGH24HOUR: 0.656241601130861,
					LOW24HOUR: 0.616746935445582,
					CHANGE24HOUR: -0.03333699729833106,
					CHANGEPCT24HOUR: -5.103131305514299,
					CHANGEDAY: -0.02144447959615703,
					CHANGEPCTDAY: -3.343527010604365,
					CHANGEHOUR: 0.0023033879349360076,
					CHANGEPCTHOUR: 0.37294271272653556,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715273,
					SUPPLY: 99987161962,
					MKTCAP: 61984893680.806335,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 56564039920,
					CIRCULATINGSUPPLYMKTCAP: 35065661748.961136,
					TOTALVOLUME24H: 2824488256.31118,
					TOTALVOLUME24HTO: 1754712435.7427764,
					TOTALTOPTIERVOLUME24H: 1628379535.3405645,
					TOTALTOPTIERVOLUME24HTO: 1013210522.4448878,
					IMAGEURL: '/media/38553096/xrp.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'XRP',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'XRP 191,322,373.1',
					TOPTIERVOLUME24HOURTO: '$ 122,337,797.7',
					LASTTRADEID: '49348752',
					PRICE: '$ 0.6199',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'XRP 75.00',
					LASTVOLUMETO: '$ 46.48',
					VOLUMEHOUR: 'XRP 7,041,401.2',
					VOLUMEHOURTO: '$ 4,363,365.4',
					OPENHOUR: '$ 0.6176',
					HIGHHOUR: '$ 0.6215',
					LOWHOUR: '$ 0.6167',
					VOLUMEDAY: 'XRP 142,458,730.0',
					VOLUMEDAYTO: '$ 90,721,430.9',
					OPENDAY: '$ 0.6414',
					HIGHDAY: '$ 0.6545',
					LOWDAY: '$ 0.6167',
					VOLUME24HOUR: 'XRP 191,322,373.1',
					VOLUME24HOURTO: '$ 122,337,797.7',
					OPEN24HOUR: '$ 0.6533',
					HIGH24HOUR: '$ 0.6562',
					LOW24HOUR: '$ 0.6167',
					CHANGE24HOUR: '$ -0.033',
					CHANGEPCT24HOUR: '-5.10',
					CHANGEDAY: '$ -0.021',
					CHANGEPCTDAY: '-3.34',
					CHANGEHOUR: '$ 0.0023',
					CHANGEPCTHOUR: '0.37',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'XRP 99,987,161,962.0',
					MKTCAP: '$ 61.98 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'XRP 56,564,039,920.0',
					CIRCULATINGSUPPLYMKTCAP: '$ 35.07 B',
					TOTALVOLUME24H: 'XRP 2.82 B',
					TOTALVOLUME24HTO: '$ 1.75 B',
					TOTALTOPTIERVOLUME24H: 'XRP 1.63 B',
					TOTALTOPTIERVOLUME24HTO: '$ 1.01 B',
					IMAGEURL: '/media/38553096/xrp.png',
				},
			},
		},
		{
			CoinInfo: {
				Id: '925809',
				Name: 'USDC',
				FullName: 'USD Coin',
				Internal: 'USDC',
				ImageUrl: '/media/34835941/usdc.png',
				Url: '/coins/usdc/overview',
				Algorithm: 'N/A',
				ProofType: 'N/A',
				Rating: {
					Weiss: {
						Rating: '',
						TechnologyAdoptionRating: '',
						MarketPerformanceRating: '',
					},
				},
				NetHashesPerSecond: 0,
				BlockNumber: 0,
				BlockTime: 0,
				BlockReward: 0,
				AssetLaunchDate: '2018-09-10',
				MaxSupply: -1,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'USDC',
					TOSYMBOL: 'USD',
					FLAGS: '2',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 0.999900024823339,
					TOPTIERVOLUME24HOUR: 13175862.2476889,
					TOPTIERVOLUME24HOURTO: 13175043.2105881,
					LASTTRADEID: '4486166',
					PRICE: 0.999900024823339,
					LASTUPDATE: 1727715272,
					LASTVOLUME: 1.6336,
					LASTVOLUMETO: 1.63343664,
					VOLUMEHOUR: 551526.73122787,
					VOLUMEHOURTO: 551520.184789717,
					OPENHOUR: 0.999910611055058,
					HIGHHOUR: 1.00000088656829,
					LOWHOUR: 0.999899034422934,
					VOLUMEDAY: 11541480.2477334,
					VOLUMEDAYTO: 11540715.1824641,
					OPENDAY: 0.999898623383825,
					HIGHDAY: 1.00010428954838,
					LOWDAY: 0.99970003904607,
					VOLUME24HOUR: 13175862.2476889,
					VOLUME24HOURTO: 13175043.2105881,
					OPEN24HOUR: 1.00009519973354,
					HIGH24HOUR: 1.00010428954838,
					LOW24HOUR: 0.99970003904607,
					CHANGE24HOUR: -0.00019517491020115685,
					CHANGEPCT24HOUR: -0.019515633137041175,
					CHANGEDAY: 0.0000014014395139927416,
					CHANGEPCTDAY: 0.0001401581601592804,
					CHANGEHOUR: -0.000010586231719011963,
					CHANGEPCTHOUR: -0.001058717809569185,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715272,
					SUPPLY: 35678129079.45035,
					MKTCAP: 35674562152.192696,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 35678129079.45035,
					CIRCULATINGSUPPLYMKTCAP: 35674562152.192696,
					TOTALVOLUME24H: 1198780943.80854,
					TOTALVOLUME24HTO: 1198661593.69396,
					TOTALTOPTIERVOLUME24H: 1119764628.6598377,
					TOTALTOPTIERVOLUME24HTO: 1119653178.2153237,
					IMAGEURL: '/media/34835941/usdc.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'USDC',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'USDC 13,175,862.2',
					TOPTIERVOLUME24HOURTO: '$ 13,175,043.2',
					LASTTRADEID: '4486166',
					PRICE: '$ 0.9999',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'USDC 1.63',
					LASTVOLUMETO: '$ 1.63',
					VOLUMEHOUR: 'USDC 551,526.7',
					VOLUMEHOURTO: '$ 551,520.2',
					OPENHOUR: '$ 0.9999',
					HIGHHOUR: '$ 1.00',
					LOWHOUR: '$ 0.9999',
					VOLUMEDAY: 'USDC 11,541,480.2',
					VOLUMEDAYTO: '$ 11,540,715.2',
					OPENDAY: '$ 0.9999',
					HIGHDAY: '$ 1.00',
					LOWDAY: '$ 0.9997',
					VOLUME24HOUR: 'USDC 13,175,862.2',
					VOLUME24HOURTO: '$ 13,175,043.2',
					OPEN24HOUR: '$ 1.00',
					HIGH24HOUR: '$ 1.00',
					LOW24HOUR: '$ 0.9997',
					CHANGE24HOUR: '$ -0.00020',
					CHANGEPCT24HOUR: '-0.02',
					CHANGEDAY: '$ 0.0000014',
					CHANGEPCTDAY: '0.00',
					CHANGEHOUR: '$ -0.000011',
					CHANGEPCTHOUR: '0.00',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'USDC 35,678,129,079.5',
					MKTCAP: '$ 35.67 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'USDC 35,678,129,079.5',
					CIRCULATINGSUPPLYMKTCAP: '$ 35.67 B',
					TOTALVOLUME24H: 'USDC 1.20 B',
					TOTALVOLUME24HTO: '$ 1.20 B',
					TOTALTOPTIERVOLUME24H: 'USDC 1.12 B',
					TOTALTOPTIERVOLUME24HTO: '$ 1.12 B',
					IMAGEURL: '/media/34835941/usdc.png',
				},
			},
		},
		{
			CoinInfo: {
				Id: '953245',
				Name: 'PEPE',
				FullName: 'Pepe',
				Internal: 'PEPE',
				ImageUrl: '/media/44082118/pepe.png',
				Url: '/coins/pepe/overview',
				Algorithm: 'N/A',
				ProofType: 'N/A',
				Rating: {
					Weiss: {
						Rating: '',
						TechnologyAdoptionRating: '',
						MarketPerformanceRating: '',
					},
				},
				NetHashesPerSecond: 0,
				BlockNumber: 0,
				BlockTime: 0,
				BlockReward: 0,
				AssetLaunchDate: '2023-04-14',
				MaxSupply: -1,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'PEPE',
					TOSYMBOL: 'USD',
					FLAGS: '1',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 0.0000107242693260523,
					TOPTIERVOLUME24HOUR: 661081488626.776,
					TOPTIERVOLUME24HOURTO: 7287482.83706513,
					LASTTRADEID: '3505674',
					PRICE: 0.0000107242693260523,
					LASTUPDATE: 1727715271,
					LASTVOLUME: 665890,
					LASTVOLUMETO: 7.14167025,
					VOLUMEHOUR: 49400981142.3892,
					VOLUMEHOURTO: 530722.684992732,
					OPENHOUR: 0.0000106983884215708,
					HIGHHOUR: 0.0000108189462598254,
					LOWHOUR: 0.0000106475832382806,
					VOLUMEDAY: 521309966171.173,
					VOLUMEDAYTO: 5706485.89132079,
					OPENDAY: 0.000011322522866365,
					HIGHDAY: 0.0000114888372119589,
					LOWDAY: 0.0000105951249986238,
					VOLUME24HOUR: 661081488626.776,
					VOLUME24HOURTO: 7287482.83706513,
					OPEN24HOUR: 0.0000111501387070169,
					HIGH24HOUR: 0.0000116439257121831,
					LOW24HOUR: 0.0000105951249986238,
					CHANGE24HOUR: -4.258693809645985e-7,
					CHANGEPCT24HOUR: -3.8194088177270333,
					CHANGEDAY: -5.982535403126986e-7,
					CHANGEPCTDAY: -5.283747689217631,
					CHANGEHOUR: 2.5880904481501187e-8,
					CHANGEPCTHOUR: 0.24191404781413986,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715271,
					SUPPLY: 420689899999995,
					MKTCAP: 4511591790.3499565,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 420689899999995,
					CIRCULATINGSUPPLYMKTCAP: 4511591790.3499565,
					TOTALVOLUME24H: 95910618786500.3,
					TOTALVOLUME24HTO: 1028769174.0013245,
					TOTALTOPTIERVOLUME24H: 65372039301684.49,
					TOTALTOPTIERVOLUME24HTO: 701265222.7711045,
					IMAGEURL: '/media/44082118/pepe.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'PEPE',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'PEPE 661,081,488,626.8',
					TOPTIERVOLUME24HOURTO: '$ 7,287,482.8',
					LASTTRADEID: '3505674',
					PRICE: '$ 0.00001072',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'PEPE 665,890.0',
					LASTVOLUMETO: '$ 7.14',
					VOLUMEHOUR: 'PEPE 49,400,981,142.4',
					VOLUMEHOURTO: '$ 530,722.7',
					OPENHOUR: '$ 0.00001070',
					HIGHHOUR: '$ 0.00001082',
					LOWHOUR: '$ 0.00001065',
					VOLUMEDAY: 'PEPE 521,309,966,171.2',
					VOLUMEDAYTO: '$ 5,706,485.9',
					OPENDAY: '$ 0.00001132',
					HIGHDAY: '$ 0.00001149',
					LOWDAY: '$ 0.00001060',
					VOLUME24HOUR: 'PEPE 661,081,488,626.8',
					VOLUME24HOURTO: '$ 7,287,482.8',
					OPEN24HOUR: '$ 0.00001115',
					HIGH24HOUR: '$ 0.00001164',
					LOW24HOUR: '$ 0.00001060',
					CHANGE24HOUR: '$ -4.3e-7',
					CHANGEPCT24HOUR: '-3.82',
					CHANGEDAY: '$ -6.0e-7',
					CHANGEPCTDAY: '-5.28',
					CHANGEHOUR: '$ 2.6e-8',
					CHANGEPCTHOUR: '0.24',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'PEPE 420,689,899,999,995.0',
					MKTCAP: '$ 4.51 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'PEPE 420,689,899,999,995.0',
					CIRCULATINGSUPPLYMKTCAP: '$ 4.51 B',
					TOTALVOLUME24H: 'PEPE 95,910.62 B',
					TOTALVOLUME24HTO: '$ 1.03 B',
					TOTALTOPTIERVOLUME24H: 'PEPE 65,372.04 B',
					TOTALTOPTIERVOLUME24HTO: '$ 701.27 M',
					IMAGEURL: '/media/44082118/pepe.png',
				},
			},
		},
		{
			CoinInfo: {
				Id: '4432',
				Name: 'DOGE',
				FullName: 'Dogecoin',
				Internal: 'DOGE',
				ImageUrl: '/media/37746339/doge.png',
				Url: '/coins/doge/overview',
				Algorithm: 'Scrypt',
				ProofType: 'PoW',
				Rating: {
					Weiss: {
						Rating: 'C+',
						TechnologyAdoptionRating: 'B-',
						MarketPerformanceRating: 'E+',
					},
				},
				NetHashesPerSecond: 938793827581960,
				BlockNumber: 5400149,
				BlockTime: 63,
				BlockReward: 10000,
				AssetLaunchDate: '2013-12-08',
				MaxSupply: -1,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'DOGE',
					TOSYMBOL: 'USD',
					FLAGS: '2',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 0.117054748358904,
					TOPTIERVOLUME24HOUR: 409980725.924177,
					TOPTIERVOLUME24HOURTO: 50068179.4044597,
					LASTTRADEID: '51823640',
					PRICE: 0.117054748358904,
					LASTUPDATE: 1727715272,
					LASTVOLUME: 1548.4,
					LASTVOLUMETO: 181.209252,
					VOLUMEHOUR: 23885283.1835175,
					VOLUMEHOURTO: 2803918.53668568,
					OPENHOUR: 0.117093153889293,
					HIGHHOUR: 0.117937690222098,
					LOWHOUR: 0.116884517072975,
					VOLUMEDAY: 318285147.797775,
					VOLUMEDAYTO: 38462168.7051893,
					OPENDAY: 0.124349204247751,
					HIGHDAY: 0.124636866985699,
					LOWDAY: 0.116884517072975,
					VOLUME24HOUR: 409980725.924177,
					VOLUME24HOURTO: 50068179.4044597,
					OPEN24HOUR: 0.125842993931444,
					HIGH24HOUR: 0.128928547556808,
					LOW24HOUR: 0.116884517072975,
					CHANGE24HOUR: -0.008788245572539988,
					CHANGEPCT24HOUR: -6.983500072580598,
					CHANGEDAY: -0.007294455888847001,
					CHANGEPCTDAY: -5.866105804998691,
					CHANGEHOUR: -0.00003840553038900185,
					CHANGEPCTHOUR: -0.032799125408572376,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715272,
					SUPPLY: 146173986383.705,
					MKTCAP: 17110359192.762445,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 146173986383.705,
					CIRCULATINGSUPPLYMKTCAP: 17110359192.762447,
					TOTALVOLUME24H: 6288069237.10101,
					TOTALVOLUME24HTO: 738126350.9116286,
					TOTALTOPTIERVOLUME24H: 4237753005.927663,
					TOTALTOPTIERVOLUME24HTO: 498127100.415456,
					IMAGEURL: '/media/37746339/doge.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'DOGE',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'DOGE 409,980,725.9',
					TOPTIERVOLUME24HOURTO: '$ 50,068,179.4',
					LASTTRADEID: '51823640',
					PRICE: '$ 0.1171',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'DOGE 1,548.40',
					LASTVOLUMETO: '$ 181.21',
					VOLUMEHOUR: 'DOGE 23,885,283.2',
					VOLUMEHOURTO: '$ 2,803,918.5',
					OPENHOUR: '$ 0.1171',
					HIGHHOUR: '$ 0.1179',
					LOWHOUR: '$ 0.1169',
					VOLUMEDAY: 'DOGE 318,285,147.8',
					VOLUMEDAYTO: '$ 38,462,168.7',
					OPENDAY: '$ 0.1243',
					HIGHDAY: '$ 0.1246',
					LOWDAY: '$ 0.1169',
					VOLUME24HOUR: 'DOGE 409,980,725.9',
					VOLUME24HOURTO: '$ 50,068,179.4',
					OPEN24HOUR: '$ 0.1258',
					HIGH24HOUR: '$ 0.1289',
					LOW24HOUR: '$ 0.1169',
					CHANGE24HOUR: '$ -0.0088',
					CHANGEPCT24HOUR: '-6.98',
					CHANGEDAY: '$ -0.0073',
					CHANGEPCTDAY: '-5.87',
					CHANGEHOUR: '$ -0.000038',
					CHANGEPCTHOUR: '-0.03',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'DOGE 146,173,986,383.7',
					MKTCAP: '$ 17.11 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'DOGE 146,173,986,383.7',
					CIRCULATINGSUPPLYMKTCAP: '$ 17.11 B',
					TOTALVOLUME24H: 'DOGE 6.29 B',
					TOTALVOLUME24HTO: '$ 738.13 M',
					TOTALTOPTIERVOLUME24H: 'DOGE 4.24 B',
					TOTALTOPTIERVOLUME24HTO: '$ 498.13 M',
					IMAGEURL: '/media/37746339/doge.png',
				},
			},
		},
		{
			CoinInfo: {
				Id: '204788',
				Name: 'BNB',
				FullName: 'Binance Coin',
				Internal: 'BNB',
				ImageUrl: '/media/40485170/bnb.png',
				Url: '/coins/bnb/overview',
				Algorithm: 'BEP-2',
				ProofType: 'PoSA',
				Rating: {
					Weiss: {
						Rating: 'C',
						TechnologyAdoptionRating: 'C',
						MarketPerformanceRating: 'C-',
					},
				},
				NetHashesPerSecond: 0,
				BlockNumber: 42711535,
				BlockTime: 3,
				BlockReward: 0,
				AssetLaunchDate: '2019-04-18',
				MaxSupply: 100000000,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'BNB',
					TOSYMBOL: 'USD',
					FLAGS: '2',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 572.000488304431,
					TOPTIERVOLUME24HOUR: 1555.18629672,
					TOPTIERVOLUME24HOURTO: 905528.907544482,
					LASTTRADEID: '5772114',
					PRICE: 572.000488304431,
					LASTUPDATE: 1727715274,
					LASTVOLUME: 0.11,
					LASTVOLUMETO: 62.92,
					VOLUMEHOUR: 49.94541217,
					VOLUMEHOURTO: 28597.539232882,
					OPENHOUR: 571.800004332396,
					HIGHHOUR: 574.200151566357,
					LOWHOUR: 571.100005054101,
					VOLUMEDAY: 1290.72129672,
					VOLUMEDAYTO: 747370.074744482,
					OPENDAY: 595.600002188769,
					HIGHDAY: 595.700002131126,
					LOWDAY: 570.500008220669,
					VOLUME24HOUR: 1555.18629672,
					VOLUME24HOURTO: 905528.907544482,
					OPEN24HOUR: 597.899999459555,
					HIGH24HOUR: 600.899995717372,
					LOW24HOUR: 570.500008220669,
					CHANGE24HOUR: -25.89951115512406,
					CHANGEPCT24HOUR: -4.331746308502218,
					CHANGEDAY: -23.59951388433808,
					CHANGEPCTDAY: -3.9623092339846004,
					CHANGEHOUR: 0.20048397203493096,
					CHANGEPCTHOUR: 0.03506190460229283,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715274,
					SUPPLY: 145932819.546827,
					MKTCAP: 83473644040.42744,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 145932819.54682717,
					CIRCULATINGSUPPLYMKTCAP: 83473644040.42755,
					TOTALVOLUME24H: 1222270.93384426,
					TOTALVOLUME24HTO: 699155532.5856458,
					TOTALTOPTIERVOLUME24H: 857473.8971341745,
					TOTALTOPTIERVOLUME24HTO: 490491449.45546746,
					IMAGEURL: '/media/40485170/bnb.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'BNB',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'BNB 1,555.19',
					TOPTIERVOLUME24HOURTO: '$ 905,528.9',
					LASTTRADEID: '5772114',
					PRICE: '$ 572.00',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'BNB 0.1100',
					LASTVOLUMETO: '$ 62.92',
					VOLUMEHOUR: 'BNB 49.95',
					VOLUMEHOURTO: '$ 28,597.5',
					OPENHOUR: '$ 571.80',
					HIGHHOUR: '$ 574.20',
					LOWHOUR: '$ 571.10',
					VOLUMEDAY: 'BNB 1,290.72',
					VOLUMEDAYTO: '$ 747,370.1',
					OPENDAY: '$ 595.60',
					HIGHDAY: '$ 595.70',
					LOWDAY: '$ 570.50',
					VOLUME24HOUR: 'BNB 1,555.19',
					VOLUME24HOURTO: '$ 905,528.9',
					OPEN24HOUR: '$ 597.90',
					HIGH24HOUR: '$ 600.90',
					LOW24HOUR: '$ 570.50',
					CHANGE24HOUR: '$ -25.90',
					CHANGEPCT24HOUR: '-4.33',
					CHANGEDAY: '$ -23.60',
					CHANGEPCTDAY: '-3.96',
					CHANGEHOUR: '$ 0.20',
					CHANGEPCTHOUR: '0.04',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'BNB 145,932,819.5',
					MKTCAP: '$ 83.47 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'BNB 145,932,819.5',
					CIRCULATINGSUPPLYMKTCAP: '$ 83.47 B',
					TOTALVOLUME24H: 'BNB 1.22 M',
					TOTALVOLUME24HTO: '$ 699.16 M',
					TOTALTOPTIERVOLUME24H: 'BNB 857.47 K',
					TOTALTOPTIERVOLUME24HTO: '$ 490.49 M',
					IMAGEURL: '/media/40485170/bnb.png',
				},
			},
		},
		{
			CoinInfo: {
				Id: '954285',
				Name: 'WIF',
				FullName: 'dogwifhat',
				Internal: 'WIF',
				ImageUrl: '/media/44154324/wif.png',
				Url: '/coins/wif/overview',
				Algorithm: 'N/A',
				ProofType: 'N/A',
				Rating: {
					Weiss: {
						Rating: '',
						TechnologyAdoptionRating: '',
						MarketPerformanceRating: '',
					},
				},
				NetHashesPerSecond: 0,
				BlockNumber: 0,
				BlockTime: 0,
				BlockReward: 0,
				AssetLaunchDate: '2023-04-01',
				MaxSupply: -1,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'WIF',
					TOSYMBOL: 'USD',
					FLAGS: '2',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 2.43435116453192,
					TOPTIERVOLUME24HOUR: 2319054.97740959,
					TOPTIERVOLUME24HOURTO: 5649866.00358611,
					LASTTRADEID: '2639517',
					PRICE: 2.43435116453192,
					LASTUPDATE: 1727715260,
					LASTVOLUME: 0.3,
					LASTVOLUMETO: 0.729,
					VOLUMEHOUR: 267074.01246839,
					VOLUMEHOURTO: 651947.862519532,
					OPENHOUR: 2.38882649452112,
					HIGHHOUR: 2.45692647930235,
					LOWHOUR: 2.38851128735101,
					VOLUMEDAY: 1385642.97282738,
					VOLUMEDAYTO: 3354286.51077061,
					OPENDAY: 2.45420692939419,
					HIGHDAY: 2.49061698705697,
					LOWDAY: 2.33328164401032,
					VOLUME24HOUR: 2319054.97740959,
					VOLUME24HOURTO: 5649866.00358611,
					OPEN24HOUR: 2.29302201637692,
					HIGH24HOUR: 2.57765751717477,
					LOW24HOUR: 2.2906972324889,
					CHANGE24HOUR: 0.14132914815500008,
					CHANGEPCT24HOUR: 6.163444883896345,
					CHANGEDAY: -0.019855764862270142,
					CHANGEPCTDAY: -0.8090501507617962,
					CHANGEHOUR: 0.04552467001080007,
					CHANGEPCTHOUR: 1.9057336359594526,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715260,
					SUPPLY: 998845406.704506,
					MKTCAP: 2431540478.9984736,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 998845406.704506,
					CIRCULATINGSUPPLYMKTCAP: 2431540478.9984736,
					TOTALVOLUME24H: 261306926.317951,
					TOTALVOLUME24HTO: 636117292.201076,
					TOTALTOPTIERVOLUME24H: 173900646.61209416,
					TOTALTOPTIERVOLUME24HTO: 423339713.4117208,
					IMAGEURL: '/media/44154324/wif.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'WIF',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'WIF 2,319,055.0',
					TOPTIERVOLUME24HOURTO: '$ 5,649,866.0',
					LASTTRADEID: '2639517',
					PRICE: '$ 2.43',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'WIF 0.3000',
					LASTVOLUMETO: '$ 0.7290',
					VOLUMEHOUR: 'WIF 267,074.0',
					VOLUMEHOURTO: '$ 651,947.9',
					OPENHOUR: '$ 2.39',
					HIGHHOUR: '$ 2.46',
					LOWHOUR: '$ 2.39',
					VOLUMEDAY: 'WIF 1,385,643.0',
					VOLUMEDAYTO: '$ 3,354,286.5',
					OPENDAY: '$ 2.45',
					HIGHDAY: '$ 2.49',
					LOWDAY: '$ 2.33',
					VOLUME24HOUR: 'WIF 2,319,055.0',
					VOLUME24HOURTO: '$ 5,649,866.0',
					OPEN24HOUR: '$ 2.29',
					HIGH24HOUR: '$ 2.58',
					LOW24HOUR: '$ 2.29',
					CHANGE24HOUR: '$ 0.14',
					CHANGEPCT24HOUR: '6.16',
					CHANGEDAY: '$ -0.020',
					CHANGEPCTDAY: '-0.81',
					CHANGEHOUR: '$ 0.046',
					CHANGEPCTHOUR: '1.91',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'WIF 998,845,406.7',
					MKTCAP: '$ 2.43 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'WIF 998,845,406.7',
					CIRCULATINGSUPPLYMKTCAP: '$ 2.43 B',
					TOTALVOLUME24H: 'WIF 261.31 M',
					TOTALVOLUME24HTO: '$ 636.12 M',
					TOTALTOPTIERVOLUME24H: 'WIF 173.90 M',
					TOTALTOPTIERVOLUME24HTO: '$ 423.34 M',
					IMAGEURL: '/media/44154324/wif.png',
				},
			},
		},
		{
			CoinInfo: {
				Id: '953119',
				Name: 'SUI',
				FullName: 'Sui',
				Internal: 'SUI',
				ImageUrl: '/media/44082045/sui.png',
				Url: '/coins/sui/overview',
				Algorithm: 'N/A',
				ProofType: 'N/A',
				Rating: {
					Weiss: {
						Rating: '',
						TechnologyAdoptionRating: '',
						MarketPerformanceRating: '',
					},
				},
				NetHashesPerSecond: 0,
				BlockNumber: 0,
				BlockTime: 0,
				BlockReward: 0,
				AssetLaunchDate: '2023-04-01',
				MaxSupply: -1,
				Type: 1,
				DocumentType: 'Webpagecoinp',
			},
			RAW: {
				USD: {
					TYPE: '5',
					MARKET: 'CCCAGG',
					FROMSYMBOL: 'SUI',
					TOSYMBOL: 'USD',
					FLAGS: '1',
					LASTMARKET: 'CCCAGG',
					MEDIAN: 1.75321593101433,
					TOPTIERVOLUME24HOUR: 38110211.2151274,
					TOPTIERVOLUME24HOURTO: 67401432.0087652,
					LASTTRADEID: '11079384',
					PRICE: 1.75321593101433,
					LASTUPDATE: 1727715275,
					LASTVOLUME: 57.9,
					LASTVOLUMETO: 101.50449,
					VOLUMEHOUR: 1970649.39005077,
					VOLUMEHOURTO: 3472124.53121436,
					OPENHOUR: 1.74664750649429,
					HIGHHOUR: 1.78292129585653,
					LOWHOUR: 1.74645873594549,
					VOLUMEDAY: 25562851.6327068,
					VOLUMEDAYTO: 44648273.5410939,
					OPENDAY: 1.7589506729621,
					HIGHDAY: 1.79346866505555,
					LOWDAY: 1.70254423798251,
					VOLUME24HOUR: 38110211.2151274,
					VOLUME24HOURTO: 67401432.0087652,
					OPEN24HOUR: 1.8361686706319,
					HIGH24HOUR: 1.8695538969028,
					LOW24HOUR: 1.70254423798251,
					CHANGE24HOUR: -0.08295273961756999,
					CHANGEPCT24HOUR: -4.517708037629386,
					CHANGEDAY: -0.005734741947770017,
					CHANGEPCTDAY: -0.3260319937291148,
					CHANGEHOUR: 0.006568424520040139,
					CHANGEPCTHOUR: 0.3760589641365977,
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 1727715275,
					SUPPLY: 10000000000,
					MKTCAP: 17532159310.1433,
					MKTCAPPENALTY: 0,
					CIRCULATINGSUPPLY: 2679963749.6338882,
					CIRCULATINGSUPPLYMKTCAP: 4698555140.399033,
					TOTALVOLUME24H: 325776135.444434,
					TOTALVOLUME24HTO: 571741913.1775466,
					TOTALTOPTIERVOLUME24H: 237011995.86017957,
					TOTALTOPTIERVOLUME24HTO: 416119209.55565214,
					IMAGEURL: '/media/44082045/sui.png',
				},
			},
			DISPLAY: {
				USD: {
					FROMSYMBOL: 'SUI',
					TOSYMBOL: '$',
					MARKET: 'CryptoCompare Index',
					LASTMARKET: 'CCCAGG',
					TOPTIERVOLUME24HOUR: 'SUI 38,110,211.2',
					TOPTIERVOLUME24HOURTO: '$ 67,401,432.0',
					LASTTRADEID: '11079384',
					PRICE: '$ 1.75',
					LASTUPDATE: 'Just now',
					LASTVOLUME: 'SUI 57.90',
					LASTVOLUMETO: '$ 101.50',
					VOLUMEHOUR: 'SUI 1,970,649.4',
					VOLUMEHOURTO: '$ 3,472,124.5',
					OPENHOUR: '$ 1.75',
					HIGHHOUR: '$ 1.78',
					LOWHOUR: '$ 1.75',
					VOLUMEDAY: 'SUI 25,562,851.6',
					VOLUMEDAYTO: '$ 44,648,273.5',
					OPENDAY: '$ 1.76',
					HIGHDAY: '$ 1.79',
					LOWDAY: '$ 1.70',
					VOLUME24HOUR: 'SUI 38,110,211.2',
					VOLUME24HOURTO: '$ 67,401,432.0',
					OPEN24HOUR: '$ 1.84',
					HIGH24HOUR: '$ 1.87',
					LOW24HOUR: '$ 1.70',
					CHANGE24HOUR: '$ -0.083',
					CHANGEPCT24HOUR: '-4.52',
					CHANGEDAY: '$ -0.0057',
					CHANGEPCTDAY: '-0.33',
					CHANGEHOUR: '$ 0.0066',
					CHANGEPCTHOUR: '0.38',
					CONVERSIONTYPE: 'direct',
					CONVERSIONSYMBOL: '',
					CONVERSIONLASTUPDATE: 'Just now',
					SUPPLY: 'SUI 10,000,000,000.0',
					MKTCAP: '$ 17.53 B',
					MKTCAPPENALTY: '0 %',
					CIRCULATINGSUPPLY: 'SUI 2,679,963,749.6',
					CIRCULATINGSUPPLYMKTCAP: '$ 4.70 B',
					TOTALVOLUME24H: 'SUI 325.78 M',
					TOTALVOLUME24HTO: '$ 571.74 M',
					TOTALTOPTIERVOLUME24H: 'SUI 237.01 M',
					TOTALTOPTIERVOLUME24HTO: '$ 416.12 M',
					IMAGEURL: '/media/44082045/sui.png',
				},
			},
		},
	],
	RateLimit: {},
	HasWarning: false,
};
