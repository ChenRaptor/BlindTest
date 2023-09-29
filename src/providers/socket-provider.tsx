"use client"

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"

import { io as ClientIO } from "socket.io-client"

type SocketContextType = {
    socket: any | null;
    isConnected: boolean;
}

const SocketContext = createContext<SocketContextType>({
    socket: null,
    isConnected: false
})

export const useSocket = () => {
    return useContext(SocketContext);
}

export const SocketProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // console.log('ok')
        const socketInstance = new (ClientIO as any)("http://localhost:3000", {
            path: "/api/socket/io",
            addTrailingSlash : false,
            rejectUnauthorized: false,
        });

        socketInstance.on("connect", () => {
            console.log("connect");
            setIsConnected(true);
        })

        socketInstance.on("connect_error", (error: any) => {
            console.error(error.message);
        });

        socketInstance.on("disconnect", () => {
            console.log("disconnect")
            setIsConnected(false)
        })

        setSocket(socketInstance);

        // console.log(socketInstance)

        return () => {
            socketInstance.disconnect();
        }
    }, []);

    return (
        <SocketContext.Provider value={{ socket, isConnected }}>
            {children}
        </SocketContext.Provider>
    )
}

//app/api
//page/api