import WebSocket from 'ws'
import { createServer } from 'http'

const server = createServer()

server.listen(8000)

const wss = new WebSocket.Server({server})

wss.on('connection', (ws: WebSocket) => {

    console.log('Connection established')

    ws.send('Hello there')
    ws.on('message', (message) => {
        ws.send(JSON.stringify({message}))
    })

})
