"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import SocketQRCode from '@components/QrCode/QrCode'
import { useSocket } from '@/providers/socket-provider'
import { useEffect } from "react"

export default function Home() {

  const {socket, isConnected} = useSocket()

  useEffect(() => {
    console.log(socket);
    if (socket) {
      socket.emit("connect")
    }
  },[socket])

  return (
    <main className={styles.main}>
      <SocketQRCode/>
    </main>
  )
}
