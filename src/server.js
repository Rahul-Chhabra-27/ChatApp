const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const http = require("http");
const socketio = require("socket.io");
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static(path.join(__dirname, "../", "static")));

let count = 0;
/// io.on() inkoves every time , when new user joins the client-server communication.
io.on("connection", (server) => {
  console.log("New websocket connection established..");
  // Sending a request to a new client about updated count value... 
  server.emit("updatedCount", count);
  // Accepting the client request and doing accordingly....
  server.on("incrementCount", () => {
    count++;
    // Sending a request back to all the clients that are connected and letting them know about the updated count value. 
    io.emit("updatedCount", count);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
