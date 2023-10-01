import { Server } from "socket.io";
import { NextApiRequest } from "next";
import { NextApiResponseServerIo } from "@/types"

export default function SocketHandler( req: NextApiRequest, res: NextApiResponseServerIo ) {

    if (res.socket.server.io) {
        res.end();
        return;
    }

    const io = new Server(res.socket.server as any);
    res.socket.server.io = io;

    const onConnection = (socket: any) => {

        socket.on("enterRoom", ({ room_id, pseudo }: { room_id: string, pseudo: string }) => {

            if (!socket.rooms.has(room_id)) 
            {

                console.log(`Socket ${socket.id} s'est connectée à la room ${room_id}`);
                socket.join(`room-/${room_id}`);

                socket.data.user = { 
                    socket_id: socket.id, 
                    pseudo: pseudo 
                };

                // const room = io.sockets.adapter.rooms.get(`room-/${room_id}`);

                io.in(`room-/${room_id}`).fetchSockets().then((res) => {

                    const socketsInRoom = res.map((socket) => socket.data.user)

                    io.to(`room-/${room_id}`).emit("newPlayerJoinParty", {
                        room: {
                            id: `room-/${room_id}`,
                            numberPlayer: socketsInRoom.length,
                            sockets: socketsInRoom,
                        },
                        newPlayer: socket.data.user,
                    });

                })

            }
            else 
            {
                console.log(`Socket ${socket.id} est déjà connectée à la room ${room_id}`);
            }

        });
    };

    io.on("connection", onConnection);

    console.log("Setting up socket");
    res.end();
}