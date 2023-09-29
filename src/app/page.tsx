"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import SocketQRCode from '@components/QrCode/QrCode'
import { useSocket } from '@/providers/socket-provider'
import { useEffect } from "react"
import { io } from 'socket.io-client'

export default async function Home() {

  // const {socket, isConnected} = useSocket()

  // await fetch('/api/socket/io')
  // let socket = io()

  // socket.on('connect', () => {
  //   console.log('connected')
  // })
  

  // useEffect(() => {
  //   console.log(socket);
  // },[socket])

  // useEffect(() => {
  //   console.log("isConnected: ", isConnected)
  // },[isConnected])

  return (
    <main className={styles.main}>
      <SocketQRCode/>
    </main>
  )
}
