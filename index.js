const {
    settings,
    trades,
    markets,
    orderBook,
    volumeCounters,
    heatmapCandles
} = require("./controllers/requests");

class tensorChart {
    constructor(exchange, pair) {
        this.exchange = exchange;
        this.pair = pair;
    }

    chart(candleTime) {
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

    tradingViewConfig(definitions = {}) {
        return new Promise((resolve, reject) => {
            settings(this.exchange, this.pair).then(info => {
                if(definitions == {} || definitions == null){
                    var tvconf = {
                        supports_search: true,
                        supports_group_request: false,
                        supports_marks: false,
                        supports_timescale_marks: false,
                        supports_time: true,
                        exchanges: {
                            value: this.exchange.toUpperCase(),
                            name: this.exchange.toUpperCase(),
                            desc: this.exchange.toUpperCase(),
                        },
                        supported_resolutions: [
                            '1', '3', '5', '15', '30', '60', '120', '240', '360', '720', 'D', 'W', 'M'
                        ]
                    }
                }else{
                    var tvconf = {
                        supports_search: definitions.search,
                        supports_group_request: definitions.group,
                        supports_marks: definitions.marks,
                        supports_timescale_marks: definitions.timescale,
                        supports_time: definitions.time,
                        exchanges: {
                            value: this.exchange.toUpperCase(),
                            name: this.exchange.toUpperCase(),
                            desc: this.exchange.toUpperCase(),
                        },
                        supported_resolutions: [
                            '5', '15', '1D', '1H', '4H'
                        ]
                    }
                }
               
                return resolve(tvconf)
            })
        })
    }

    tradingViewChart(candleTime) {
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