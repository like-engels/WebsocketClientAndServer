import { WebSocketServer } from "ws";

const port = 3000
const wss = new WebSocketServer({ port })

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log(`Message from client: ${data}`)
    })

    ws.send('Hallo, Guten abend, WLANSocketEinstellungszeit')
    ws.send(`And every day is like a battle
    But every night with us is like a dream`)
})

console.log(`Listening at port ${port}...`)