const express = require("express");
const socketio = require("socket.io");
const redis = require("redis");

const app = express();
const server = app.listen(3000);
const io = socketio(server);

// Redis setup
const pub = redis.createClient();
const sub = redis.createClient();

// Socket.io connection
io.on("connection", (socket) => {
  socket.on("message", ({ user, text }) => {
    pub.publish("chat", JSON.stringify({ user, text }));
  });
});

// Redis subscription
sub.subscribe("chat");
sub.on("message", (channel, message) => {
  io.emit("message", JSON.parse(message));
});

console.log("Server running on port 3000");
