"use client"
import Button from '@components/Button/Button';
import styles from './page.module.scss'

import SocketQRCode from '@components/QrCode/QrCode'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const socketURL = `${process.env.NEXT_PUBLIC_SITE_URL}/room/${uuidv4()}/phone`;


  return (
    <main className={styles.main}>
      <div>
        
      </div>
      <Button text="Musique Film"/>
      <Button text="Réplique Film"/>
      <Button text="Musique Série"/>
      <Button text="Réplique Série"/>
      <Button text="Musique Anime"/>
      <Button text="Réplique Anime"/>


      <Link href={socketURL}>Lien vers la room</Link>
      {/* <SocketQRCode url={socketURL}/> */}



    </main>
  )
}