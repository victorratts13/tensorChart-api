![logo](https://github.com/victorratts13/tensorChart-api/blob/main/asset/logo.jpg?raw=true)
![env](https://img.shields.io/badge/env-npm-red) ![lang](https://img.shields.io/badge/language-javascript-yellow) ![version](https://img.shields.io/badge/version-1.0-brightgreen)

## introduction

tensorchart-api is a js library that integrates accesses to tensorchart.com, with which it is possible to obtain all tensor information and statistical data.
it is also possible to format the graphical data output to integrate with the tradingview

## usage
follow the instructions below to use the library

### install

```bash
~# npm i tensorchart-api --save
```

### configuration

```js
const tensorChart = require('tensorchart-api');
//use with exchange and currencie Pair
const tensor = new tensorChart('binance', 'BNBBTC')
```

### example

```js
tensor.chart('5min').then(chart => {
  console.log(chart)
})
```

- returns

```bash
{
    open: 17795.83,
    high: 17814.89,
    low: 17755.55,
    close: 17768.17,
    volume: 415.001242,
    heatmap: [
      17820,  5.172808999999998,
      17810, 26.854821000000015,
      17800,  54.00554800000001,
      17790, 136.30992299999997,
      17780,          69.938343,
      17770,  80.13468300000004,
      17760,  42.58511499999998
    ],
    heatmapStep: 10,
    heatmapStepVolume: 97.20900304615498,
    heatmapSells: [
      17820,  4.039930999999999,
      17810,          16.348587,
      17800, 33.409158000000005,
      17790,  68.42017600000001,
      17780,          32.878633,
      17770,  50.86639800000002,
      17760, 28.805457999999998
    ],
    heatmapBuys: [
      17820, 1.1328779999999998,
      17810, 10.506234000000001,
      17800,           20.59639,
      17790,  67.88974700000003,
      17780,           37.05971,
      17770,          29.268285,
      17760, 13.779656999999997
    ],
    heatmapDelta: [
      17820, -2.9070529999999994,
      17810,  -5.842352999999996,
      17800, -12.812767999999997,
      17790, -0.5304289999999985,
      17780,   4.181076999999993,
      17770,          -21.598113,
      17760, -15.025801000000003
    ],
    heatmapOrderBook: [
      19060,             21.836,               19050,
       0.06,              19040,                0.02,
      19030,                  0,               19020,
       0.01,              19010,             121.498,
      19000, 18.726000000000003,               18990,
       1.81,              18980,                0.01,
      18970,                  0,               18960,
      34.93,              18950,                0.01,
      18940,                  0,               18930,
       0.41,              18920,                   0,
      18910,              36.78,               18900,
          0,              18890,                0.01,
      18880,               0.16,               18870,
          0,              18860,               10.37,
      18850,                  0,               18840,
      0.632,              18830,                   0,
      18820,                  0,               18810,
      40.92,              18800,  0.9479999999999998,
      18790,                  0,               18780,
       0.02,              18770, 0.21000000000000002,
      18760,              11.33,               18750,
       2.44,              18740, 0.22000000000000003,
      18730,               10.4,               18720,
          0,              18710,   35.01200000000001,
      18700,  7.890000000000001,               18690,
       2.71,              18680,                   0,
      18670,              0.006,               18660,
      14.25,              18650,                   0,
      18640,              3.056,               18630,
       4.65,              18620,                   0,
      18610,             57.862,               18600,
      11.44,              18590,                 5.7,
      18580,               4.24,               18570,
       3.63,
      ... 408 more items
    ],
    heatmapOrderBook2: [
                    18241,                3.81,               18240,
                     0.09,               18239,                0.07,
                    18238,                 2.1,               18237,
                     0.39,               18236,                0.38,
                    18235,                0.15,               18234,
                     0.02,               18233,                0.12,
                    18232,                0.05,               18231,
                     0.04,               18230,                0.01,
                    18229,                0.18,               18228,
                     2.04,               18227,                0.35,
                    18226,                0.07,               18225,
                     0.02,               18224,                0.01,
                    18223, 0.09000000000000001,               18222,
       0.6766666666666666,               18221,   4.883333333333333,
                    18220,                0.02,               18219,
                     0.11,               18218,                4.79,
                    18217,                0.27,               18216,
      0.10000000000000002,               18215,                0.22,
                    18214,                0.04,               18213,
                     0.01,               18212,                0.25,
                    18211,                0.14,               18210,
                     0.01,               18209, 0.11000000000000001,
                    18208,                3.05,               18207,
                     0.89,               18206,                0.56,
                    18205,                0.09,               18204,
                     0.04,               18203,                0.02,
                    18202,                   0,               18201,
       56.105999999999995,               18200,                2.42,
                    18199,                0.36,               18198,
                     3.12,               18197,                0.33,
                    18196,                2.23,               18195,
                     0.12,               18194,                0.02,
                    18193,                 0.2,               18192,
                     0.04,
      ... 1736 more items
    ],
    askVolume: 8294.878752199995,
    bidVolume: 4866.8986796,
    vwap: 7380524.80081,
    buyVolume: 180.232901,
    sellVolume: 234.76834100000002,
    minOrderBookHeatmapIncrement: 1,
    maxOrderBookHeatmapPointVolume: 121.67743857949972,
    maxOrderBook2HeatmapPointVolume: 21.398249492049217,
    T: '2020-12-11T07:30:00Z',
    date: 'Fri Dec 11 2020 07:30:00 GMT+0000 (UTC)',
    dateInt: 1607671800
  }
```

## real time connection

### live socket
to realtime conncetion with websockets. use this: 

```js
//type is reg for default
//exchangeAndPair is binance-BTCUSDT default
tensor.liveChart({type: 'reg', exchangeAndPair: 'binanceBTCUSDT'}, call => {
    console.log(call)
})
```

### live chart

to connect in live chart candle values, you can use this:

```js
//define type
//define time
//exchangeAndPair is binance on default
tensor.liveChartCandle({type: 'reg', time: '5min', exchangeAndPair: 'binanceBTCUSDT'}, call => {
    console.log(call)
})
```

returns: 

```js
{
  open: 45793.34,
  close: 45859.64,
  high: 45868.04,
  low: 45767.61,
  vol: 59.84709999999999,
  time: 1631474400
}
```

## format tradingview export

to export tradingview format on ``udf`` protocol try this.:

```js
//define time for get data 5min, 30min, ...
tensor.tradingViewChart('5min').then(data => {
    console.log(data)
})
```

## get config format tradingView

to get data for config json chart, you can try this.

```js
tensor.tradingViewConfig(null).then(data => {
    console.log(data)
})
```

end return this.

```bash
{
  supports_search: true,
  supports_group_request: false,
  supports_marks: false,
  supports_timescale_marks: false,
  supports_time: true,
  exchanges: { value: 'BINANCE', name: 'BINANCE', desc: 'BINANCE' },
  supported_resolutions: [
    '1',   '3',   '5',
    '15',  '30',  '60',
    '120', '240', '360',
    '720', 'D',   'W',
    'M'
  ]
}
```

## get tradingView symbols config

to get symbols definitions for tradingView charts use this format code:

```js
tensor.tradingViewSymbols(null).then(data => {
    console.log(data)
})

```

and return this

```bash
{
  name: 'BNBBTC',
  description: 'BNBBTC',
  type: 'crypto',
  session: '24x7',
  timezone: 'America/New_York',
  ticker: 'BNBBTC',
  minmov: 1,
  pricescale: 100000000,
  has_intraday: true,
  intraday_multipliers: [ '1', '60' ],
  supported_resolutions: [
    '1',   '3',   '5',
    '15',  '30',  '60',
    '120', '240', '360',
    '720', 'D',   'W',
    'M'
  ],
  volume_precision: 8,
  data_status: 'streaming'
}
```


