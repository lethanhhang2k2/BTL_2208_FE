import { pushMessage } from "@routes/inbox"
import { io } from "socket.io-client"

const socket = io("http://tiro-app.herokuapp.com", { transports: ['websocket'] })

socket.on('newmsg', (data) => {
    pushMessage(data.user, data.message)
})

export default socket