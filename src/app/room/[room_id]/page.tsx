"use client"
import { useState, useEffect } from "react";
import { useSocket } from "@/providers/socket-provider";
import { useForm } from "react-hook-form";


export default function Room({ params }: { params: { room_id: string } }) {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState<any>("");
    const { socket } = useSocket()


    useEffect(() => {
        if (data !== "" && socket) {
            socketInitializer(socket, data);
        }
    }, [data, socket]);



    const socketInitializer = async (socket: any, data: any) => {

        socket.emit("enterRoom", { room_id: params.room_id, pseudo: data.pseudo });

        socket.on("newPlayerJoinParty", (data : any) => {

            console.log(data)
            // console.log(`${newPlayer} vient de joindre le salon. Il y a maintenant ${room.numberPlayer} personnes dans le salon.`);
            // console.log(room);
        });
        console.log(socket)
    };




  return (
    <main>
      <form onSubmit={handleSubmit((formData) => setData(formData))}>
        <input {...register("pseudo")} placeholder="Pseudo" />
        <p>{JSON.stringify(data)}</p>
        <input type="submit" />
      </form>
    </main>
  );
}