import WebSocket from "ws";

const port = 3000
const ws = new WebSocket(`ws://localhost:${port}`)

ws.on('open', () => {
    console.log("[client] Client connected.")
    ws.send(`'Cause baby, I could build a castle
    Out of all the bricks they threw at me`)
})
ws.on('message', (data) => {
    console.log(`Received a message: ${data}`)
})