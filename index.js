import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer,{
  cors: {
    origins: "*:*",
    methods: ["GET", "POST"]
  });

io.on("connection", (socket) => {
  console.log('conn');
  socket.on('qq', ()=>{
    console.log('qq');
  })
  socket.on('disconnect', ()=>{
    console.log('disconnect');
  })
});

httpServer.listen(3000);
