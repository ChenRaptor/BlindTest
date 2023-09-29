import Image from 'next/image'
import styles from './page.module.scss'
import SocketQRCode from '@components/QrCode/QrCode'

export default function Home() {
  return (
    <main className={styles.main}>
      <SocketQRCode/>
    </main>
  )
}
