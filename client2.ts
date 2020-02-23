import io from 'socket.io-client'

const socket = io('ws://localhost:8080')

socket.emit('SEND_MESSAGE', { event: 'ADD_WORK_SCHEDULE' })
