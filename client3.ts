import io from 'socket.io-client'
const socket = io('ws://localhost:3000')

const EVENT = 'ASSIGN_TASK'
socket.emit('JOIN', { event: EVENT })
socket.on(`${EVENT}_SUBSCRIBE`, (msg: any) => {
  console.log(msg)
})
