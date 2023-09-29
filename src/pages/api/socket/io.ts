import { Server } from "socket.io";
import messageHandler from "@/utils/sockets/messageHandler";
import { NextApiRequest, NextApiResponse } from "next";

export default function SocketHandler(req: NextApiRequest, res: any) {
  // It means that socket server was already initialised
  if (res.socket.server.io) {
    // console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket: any) => {

    socket.on("enterRoom", ({room_id, pseudo}: {room_id: string, pseudo: string}) => {

        if (!socket.rooms.has(room_id)) {
          console.log(`Socket ${socket.id} s'est connectée à la room ${room_id}`);
          socket.join(`room-/${room_id}`);
          io.to(`room-/${room_id}`).emit("newPlayerJoinParty", pseudo);
        }
        else {
          console.log(`Socket ${socket.id} est déjà connectée à la room ${room_id}`);
        }

        const room = io.sockets.adapter.rooms.get(`room-/${room_id}`);
        console.log({
          room: `room-/${room_id}`,
          numberPlayer: room!.size,
          sockets: room
        });
    });


  };

  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}