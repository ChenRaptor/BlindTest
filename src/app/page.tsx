"use client"
import { useState } from 'react'
import styles from './page.module.scss'
import Sound from '@components/Sound/Sound'
import UserList from '@components/UserList/UserList'
import ScoreBoard from '@components/ScoreBoard/ScoreBoard'
import Answer from '@components/Answer/Answer'

import SocketQRCode from '@components/QrCode/QrCode'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const socketURL = `${process.env.NEXT_PUBLIC_SITE_URL}/room/${uuidv4()}`;
  const [user, setUser] = useState<string[]>(['Jean','Marie','Rose','Albert','Hugo'])


  return (
    <main className={styles.main}>
      {/* <div>
        <ScoreBoard game={user}/>
        <UserList list={user}/>
      </div>
      <Sound/>
      <Answer/> */}
      <Link href={socketURL}>Lien vers la room</Link>
      <SocketQRCode url={socketURL}/>
    </main>
  )
}