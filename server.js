const express = require("express");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
  console.log("on")

io.on("connection", socket => {
  console.log("connected")
  socket.on('qq', ()=>{
    console.log('qq');
  })
  socket.on('disconnect', ()=>{
    console.log('disconnect');
  })
});

server.listen(process.env.PORT, () =>
  console.log("server listening on " + process.env.PORT)
);
