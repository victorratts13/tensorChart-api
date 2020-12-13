const { 
    settings, 
    trades, 
    markets, 
    orderBook,
    volumeCounters, 
    heatmapCandles 
} = require("./controllers/requests");

class tensorChart{
    constructor(exchange, pair){
        this.exchange = exchange;
        this.pair = pair;
    }

    chart(candleTime){
        return new Promise((resolve, reject) => {
            settings(this.exchange, this.pair).then(data => {
                heatmapCandles(this.exchange, data.Name, candleTime).then(chart => {
                    return resolve(chart)
                }).catch(e => {
                    return reject(e)
                })
            }).catch(e => {
                return reject(e)
            })
        })
    }

    tradingViewChart(candleTime){
        return new Promise((resolve, reject) => {
            settings(this.exchange, this.pair).then(data => {
                heatmapCandles(this.exchange, data.Name, candleTime).then(chart => {
                    var open = chart.map(ch => {
                        return ch.open
                    })
                    var close = chart.map(ch => {
                        return ch.close
                    })
                    var volume = chart.map(ch => {
                        return ch.volume
                    })
                    var high = chart.map(ch => {
                        return ch.high
                    })
                    var low = chart.map(ch => {
                        return ch.low
                    })
                    var dateInt = chart.map(ch => {
                        return ch.dateInt
                    })

                    var obj = {
                        o: open,
                        c: close,
                        h: high,
                        l: low,
                        v: volume,
                        t: dateInt,
                        s: 'ok'
                    }
                    
                    return resolve(obj)
                }).catch(e => {
                    return reject(e)
                })
            }).catch(e => {
                return reject(e)
            })
        })
    }

}

module.exports = tensorChart