/**
 * List of cryptocurrency resources. Generally sites are organized by their Alexa rank: https://www.alexa.com/siteinfo
 * Exceptions are made for sites like Yahoo which are much larger than their cryptocurrency specific pages.
 */
const WEBSITE_LIST = [
    {
        title: "Market Cap Lists",
        links: [
            { title: 'CoinMarketCap', url: 'https://coinmarketcap.com/' },                                      // 280
            { title: 'TradingView', url: 'https://www.tradingview.com/markets/cryptocurrencies/prices-all/' },  // 608
            { title: 'CoinGecko', url: 'https://www.coingecko.com/' },                                          // 4,155
            { title: 'CryptoCompare', url: 'https://www.cryptocompare.com/coins/' },                            // 4,540
            { title: 'CoinCap', url: 'https://coincap.io/' },                                                   // 49,718
            { title: 'BitInfoCharts', url: 'https://bitinfocharts.com/top-cryptocurrency-list.html' },          // 17,185
            { title: 'CryptoCoinCharts', url: 'https://cryptocoincharts.info/coins/info' },                     // 133,144
            { title: 'EveningStar', url: 'https://eveningstar.io/' },                                           // 1,064,460
        ]
    },
    {
        title: 'Exhanges',
        links: [
            { title: 'List of Exchanges', url: 'https://coinmarketcap.com/exchanges/volume/24-hour/' },         // 280
            { title: 'Binance', url: 'https://www.binance.com/' },                                              // 598
            { title: 'Coinbase', url: 'https://www.coinbase.com/' },                                            // 1,115
            { title: 'Bittrex', url: 'https://bittrex.com/' },                                                  // 2,647
            { title: 'Kucoin', url: 'https://www.kucoin.com/' },                                                // 4,601
            { title: 'IDEX', url: 'https://idex.market' },                                                      // 9,950
            { title: 'Gemini', url: 'https://gemini.com/' },                                                    // 18,441
        ]
    },
    {
        title: 'Crypto News',
        links: [
            { title: 'CoinTelegraph', url: 'https://cointelegraph.com/' },      // 3,438
            { title: 'CoinDesk', url: 'https://www.coindesk.com/' },            // 3,729
            { title: 'Bitcoin News', url: 'https://news.bitcoin.com' },         // 7,334
            { title: 'CCN', url: 'https://www.ccn.com/' },                      // 8,264
            { title: 'CryptoPanic', url: 'https://cryptopanic.com/' },          // 23,325
            { title: 'Bitcoinist', url: 'https://bitcoinist.com/' },            // 23,423
            { title: 'CoinMarketCal', url: 'https://coinmarketcal.com/' },      // 32,022
        ]
    },
    {
        title: 'Market Analysis',
        links: [
            { title: 'CryptoWatch', url: 'https://cryptowat.ch/' },             // 9,541
            { title: 'OnChainFX', url: 'https://onchainfx.com/' },              // 76,945
            { title: 'Iconomi', url: 'https://www.iconomi.net/dashboard/' },    // 206,561
            { title: 'Solume', url: 'https://solume.io/' },                     // 383,682
            { title: 'Sifr Data', url: 'http://www.sifrdata.com/' },            // 682,452
            { title: 'CoinMonsta', url: 'https://coinmonsta.io/metrics' },      // 1,923,010
        ]
    },
    {
        title: 'ICOs',
        links: [
            { title: 'ICOBench', url: 'https://icobench.com/' },                // 16,566
            { title: 'ICO Drops', url: 'https://icodrops.com/' },               // 14,253
            { title: 'ICO Alert', url: 'https://icoalert.com/' },               // 116,995
            { title: 'ICO Tracker', url: 'https://icotracker.net/' },           // 375,322
        ]
    },
    {
        title: 'Heatmaps',
        links: [
            { title: 'Coin360', url: 'https://coin360.io/' },                                       // 83,941
            { title: 'Yahoo Finance', url: 'https://finance.yahoo.com/cryptocurrencies/heatmap' },  // 6
        ]
    }
]