const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const http = require('http');
const socketio = require('socket.io');
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static(path.join(__dirname, "../", "static")));

io.on('connection',() => {
    console.log('New websocket connection established..');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
