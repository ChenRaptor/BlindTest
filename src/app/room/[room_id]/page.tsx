"use client"
import { useState, useEffect } from "react";
import { useSocket } from "@/providers/socket-provider";


export default function Room({ params }: { params: { room_id: string } }) {

    const { socket } = useSocket()

    useEffect(() => {
        if(socket) {
            socketInitializer(socket);
        }
    }, [socket]); // Utilisation d'un tableau de dépendances vide pour exécuter une seule fois

    const socketInitializer = async (socket: any) => {
        // We just call it because we don't need anything else out of it

        socket.emit("enterRoom", { room_id: params.room_id, pseudo: 'socket' });

        socket.on("newPlayerJoinParty", (msg: string) => {
        console.log(msg);
        });
    };

  return (
    <main>
      ok
    </main>
  );
}
