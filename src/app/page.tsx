"use client"
import styles from './page.module.scss'

import SocketQRCode from '@components/QrCode/QrCode'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const socketURL = `${process.env.NEXT_PUBLIC_SITE_URL}/room/${uuidv4()}/phone`;
  // const [user, setUser] = useState<string[]>(['Jean','Marie','Rose','Albert','Hugo'])


  return (
    <main className={styles.main}>



      <Link href={socketURL}>Lien vers la room</Link>
      <SocketQRCode url={socketURL}/>



    </main>
  )
}