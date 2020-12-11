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

}

module.exports = tensorChart