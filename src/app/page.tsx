"use client"
import styles from './page.module.scss'

import SocketQRCode from '@components/QrCode/QrCode'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Carrousel3D from '@components/Carrousel3D/Carrousel3D';
import Card from '@components/Card/Card';
import CardImage from '@components/CardImage/CardImage';
import Button from '@components/Button/Button';
import { useCinema } from '@/providers/cinema-provider';


export default function Home() {

  const socketURL = `${process.env.NEXT_PUBLIC_SITE_URL}/room/${uuidv4()}/phone`;
  const {cinema, setCinema} = useCinema();
  const [party, setParty] = useState(false);

  const [option, setOption] = useState('aleatoires');

  useEffect(() => {},[option])

  return (
    <main className={styles.main}>

      <div className={styles.top}>

        <div>
          <div className={styles.qrCode}>
            {
              (cinema[option] !== undefined ? cinema[option] : []).map((src : string, index : number) => <CardImage src={src} key={index}/>)
            }
            <div>
              {
                party ?  <SocketQRCode url={socketURL}/> : ''
              }
            </div>
          </div>
        </div>
        <div>
          <Button type="primary" text="Lancer la partie" onClick={() => setParty(true)}/>
        </div>

      </div>

      <div className={styles.carrousel3D}>
        <Carrousel3D gapCenter={250} carrouselItems={[

            <Card><h2>Aléatoire</h2></Card>,

            <Card><h2>Réplique série</h2></Card>,
            <Card><h2>Réplique animé</h2></Card>,
            <Card><h2>Répliques film</h2></Card>,

            <Card><h2>Musique série</h2></Card>,
            <Card><h2>Musiques animé</h2></Card>,
            <Card><h2>Musiques film</h2></Card>,

        ]} setter={setOption}/>
      </div>
    </main>
  )
}