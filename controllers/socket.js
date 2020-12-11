const WebSocket = require('ws')
const ws = new WebSocket('wss://ws-ny.tensorcharts.com/tensorWS');

const socket = (type, channel) => {
    ws.on('open', function open() {
        console.log('aberto.')
        ws.send(JSON.stringify({ "type": type, "channel": channel }), (err) => {
            if (err) {
                console.log('um erro ocorreu')
                return err
            } else {
                ws.on('message', async (data) => {
                    //callback
                })
            }
        })
    });
    /*
    return new Promise((resolve, reject) => {
        ws.on('open', function open() {
            console.log('aberto.')
            ws.send(JSON.stringify({"type":type,"channel":channel}), (err) => {
                if(err){
                    console.log('um erro ocorreu')
                    reject(err)
                }else{
                    ws.on('message', async (data) => {
                        await resolve(data)
                    })
                }
            })
        });
    })
    */
}

module.exports = { socket }