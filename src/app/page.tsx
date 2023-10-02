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
      <div className={styles.container}>
        <div className={styles.carousel}>
          <Button className={`${styles.item} ${styles.a}`} text="Tous genres"/>
          <Button className={`${styles.item} ${styles.b}`} text="Musique film"/>
          <Button className={`${styles.item} ${styles.c}`} text="Réplique film"/>
          <Button className={`${styles.item} ${styles.d}`} text="Musique série"/>
          <Button className={`${styles.item} ${styles.f}`} text="Réplique série"/>
          <Button className={`${styles.item} ${styles.e}`} text="Musique anime"/>
        </div>
        {/* <Button text="Réplique anime"/>
        <Button text="Aléatoire"/> */}
      </div>

      {/* <Link href={socketURL}>Lien vers la room</Link>
      <SocketQRCode url={socketURL}/> */}



    </main>
  )
}

// https://codepen.io/alexanderroidl/pen/PooNgqZ