"use client"

import { v4 as uuidv4 } from 'uuid';

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"

import io from "socket.io-client";
import { useSessionStorage } from 'usehooks-ts';

type SocketContextType = {
    socket: any | null;
}

const SocketContext = createContext<SocketContextType>({
    socket: null,
})

export const useSocket = () => {
    return useContext(SocketContext);
}


export const SocketProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [socket, setSocket] = useState<any>(null);
    const [value, setValue] = useSessionStorage<any>('socket', false)

    // const socketInstance = useMemo(() => {
    //     const customClientId = `socket-/${uuidv4()}`;
    //     const socket = io({
    //         query: { clientId: customClientId } // Transmettez l'identifiant personnalisé au serveur
    //     });
    //     return socket
    // }, []);

    // socket.data.user = {fname:'John',lname:'Doe'}

    useEffect(() => {
        socketInitializer();
    }, [])

    const socketInitializer = async () => {

        await fetch("/api/socket/io");
        
        const socketInstance = io();

        setSocket(socketInstance);
        setValue("socketInstance");

        return () => {
            socketInstance.disconnect();
        }
    }

        // // Côté client
        // const customClientId = 'your_custom_id'; // Générez un identifiant personnalisé ici

        // const socket = io.connect('http://your-server-url', {
        // query: { clientId: customClientId }, // Transmettez l'identifiant personnalisé au serveur
        // });

        // socket.on('connect', () => {
        // console.log(`Connected with custom ID: ${customClientId}`);
        // });


    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}