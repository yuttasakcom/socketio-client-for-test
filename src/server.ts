import * as http from 'http'
import socketIO from 'socket.io'

import koa from 'koa'

const app = new koa()
const server = http.createServer(app.callback())
const io = socketIO(server)

io.on('connect', socket => {
  console.log(`Client ${socket.id} connected`)

  socket.on('JOIN', (message: any) => {
    socket.join(message.event)
  })

  socket.on('SEND_MESSAGE', (message: any) => {
    io.to(message.event).emit(`${message.event}_SUBSCRIBE`, message)
  })

  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} disconnected`)
  })
})

server.listen(3000, () => {
  console.log('Server running on port:3000')
})
