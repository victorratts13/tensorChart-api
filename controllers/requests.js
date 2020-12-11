const axios = require('axios').default;
const axiosCookieSuport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
axiosCookieSuport(axios);
const cookieJar = new tough.CookieJar();
let apiCookie = { withCredentials: true, jar: cookieJar };
let url = 'https://www.tensorcharts.com';
const api = axios.create({
    baseURL: url,
    withCredentials: true
})

const markets = () => {
    return new Promise((resolve, reject) => {
        api.get(`/tensor/markets`, apiCookie).then(data => {
            return resolve(data.data)
        }).catch(e => {
            return reject(e)
        })
    })
}

const trades = (exchange, pair) => {
    return new Promise((resolve, reject) => {
        api.get(`/tensor/${exchange}/${pair}/trades`, apiCookie).then(data => {
            return resolve(data.data)
        }).catch(e => {
            return reject(e)
        })
    })
}

const volumeCounters = (exchange, pair) => {
    return new Promise((resolve, reject) => {
        api.get(`/tensor/${exchange}/${pair}/volumeCounters`, apiCookie).then(data => {
            return resolve(data.data)
        }).catch(e => {
            return reject(e)
        })
    })
}

const orderBook = (exchange, pair, num) => {
    return new Promise((resolve, reject) => {
        api.get(`/tensor/${exchange}/${pair}/orderBook/${num}`, apiCookie).then(data => {
            return resolve(data.data)
        }).catch(e => {
            return reject(e)
        })
    })
}

const heatmapCandles = (exchange, pair, time) => {
    return new Promise((resolve, reject) => {
        api.get(`/tensor/${exchange}/${pair}/heatmapCandles/${time}`, apiCookie).then(data => {
            return resolve(data.data)
        }).catch(e => {
            return reject(e)
        })
    })
}

const settings = (exchange, pair) => {
    return new Promise((resolve, reject) => {
        api.get(`/tensor/${exchange}/${pair}/settings`, apiCookie).then(data => {
            data = data.data;
            return resolve(data)
        }).catch(e => {
            return reject(e)
        })
    })
}

module.exports = {
    settings, markets,
    orderBook, volumeCounters,
    heatmapCandles, trades
}