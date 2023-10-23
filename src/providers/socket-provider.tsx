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

    const socketInstance = useMemo(() => io(), [])

    useEffect(() => {
        if(socketInstance) {
            socketInitializer(socketInstance);
        }
    }, [socketInstance])

    const socketInitializer = async (socketInstance: any) => {

        await fetch("/api/socket/io");

        setSocket(socketInstance);

        // console.log("ok", socketInstance)

        return () => {
            socketInstance.disconnect();
        }
    }



    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}