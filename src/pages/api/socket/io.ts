import { Server as NetServer } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { Server as ServerIO } from "socket.io";
import { NextApiResponseServerIo } from "@/types"

export const config = {
    api: {
        bodyParser: false
    }
}

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const path = "/api/socket/io";
        const httpServer: NetServer = res.socket.server as any;
        const io = new ServerIO(httpServer, {
            path: path,
            // @ts-ignore
            addTraillingSlash: false,
            rejectUnauthorized: false,
        })
        res.socket.server.io = io

    }
    // console.log("WebSocket server already initialized");
    res.end();
}

export default ioHandler