import io from 'socket.io-client'
const socket = io('ws://localhost:8080')
const EVENT = 'ADD_WORK_SCHEDULE'

socket.emit('JOIN', { event: EVENT })
socket.on(`${EVENT}_SUBSCRIBE`, (msg: any) => {
  console.log(`${EVENT}_SUBSCRIBE`)
})
