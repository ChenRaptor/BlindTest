"use client"
import Button from '@components/Button/Button';
import styles from './page.module.scss'

import SocketQRCode from '@components/QrCode/QrCode'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Carrousel3D from '@components/Carrousel3D/Carrousel3D';
import Card from '@components/Card/Card';
import CardImage from '@components/CardImage/CardImage';

export default function Home() {

  const socketURL = `${process.env.NEXT_PUBLIC_SITE_URL}/room/${uuidv4()}/phone`;

  const [rotation, setRotation] = useState(0);
  const [party, setParty] = useState(false)

  const rotate = (direction : string) => {
    if (direction === 'n') {
      setRotation(rotation - 60);
    } else if (direction === 'p') {
      setRotation(rotation + 60);
    }
  };

  const [infos, setInfos] = useState({
    music_films: [
      '/films/avenger.jpg',
      '/films/barbie.jpg',
      '/films/harry_potter.jpg',
      '/films/fast_and_furious.jpg',
      '/films/pirates_of_caribeans.jpg'
    ],
    music_series: [
      '/films/avenger.jpg',
      '/films/barbie.jpg',
      '/films/harry_potter.jpg',
      '/films/fast_and_furious.jpg',
      '/films/pirates_of_caribeans.jpg'
    ],
  })

  const type = 'music_films';

  return (
    <main className={styles.main}>

      <div className={styles.top}>

        <div>
          <Card fit>
            {
              infos[type].map((src, index) => <CardImage src={src}/>)
            }
            <div>
              {
                party ?  <SocketQRCode url={socketURL}/> : <p>Lancer la partie ...</p>
              }
            </div>
          </Card>
        </div>
        <div>
          <Button type="primary" text="Lancer la partie" onClick={() => setParty(true)}/>
        </div>

      </div>

      <div className={styles.carrousel3D}>
        <Carrousel3D gapCenter={250} carrouselItems={[
            <Card><h2>Réplique série</h2></Card>,
            <Card><h2>Musique anime</h2></Card>,
            <Card><h2>Réplique anime</h2></Card>,
            <Card><h2>Aléatoire</h2></Card> ,
            <Card><h2>Réplique série</h2></Card>,
            <Card><h2>Musique anime</h2></Card>,
            <Card><h2>Réplique anime</h2></Card>,
            <Card><h2>Aléatoire</h2></Card> ,
        ]}/>
      </div>
    </main>
  )
}




//      <Link href={socketURL}>Lien vers la room</Link>
// <SocketQRCode url={socketURL}/>
{/* <Button text="Réplique anime"/>
<Button text="Aléatoire"/>  */}
//
// https://codepen.io/alexanderroidl/pen/PooNgqZ