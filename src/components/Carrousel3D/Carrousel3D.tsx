"use client"
import Button from '@components/Button/Button';
import styles from './Carrousel3D.module.scss'
import { ReactElement, cloneElement, useState, useEffect } from 'react';

export default function Carrousel3D({carrouselItems, gapCenter} : { carrouselItems : ReactElement[], gapCenter: number }) {

  const [rotation, setRotation] = useState(0);

//   const carrouselItemsLength = carrouselItems.length
  const gapRotation = 360 / carrouselItems.length



  const rotate = (direction : string) => {
    if (direction === 'n') {
      setRotation(rotation - gapRotation);
    } else if (direction === 'p') {
      setRotation(rotation + gapRotation);
    }
  };

  return (
    <div className={styles.main}>
      <Button className={`${styles['main-button']}`} onClick={() => rotate("p")} text="Prev"/>
      <div className={styles.container}>
        <div className={styles.carousel} style={{"--rotation": `${rotation}deg`}}>
            {
                !!carrouselItems && carrouselItems.map((carrouselItem, carrouselItemIndex) => {
                    return (
                        <>
                            <div key={`op2-${carrouselItemIndex}`} className={`${styles.item}`} style={{
                                "--rotation2": `${gapRotation*carrouselItemIndex}deg`,
                                "--gapCenter": `${gapCenter}px`,
                                }}>

                                    {carrouselItem}
                            </div>
                            <div key={`op1-${carrouselItemIndex}`} className={`${styles.itembackside}`} style={{
                                "--rotation2": `${gapRotation*carrouselItemIndex}deg`,
                                "--gapCenter": `${gapCenter}px`,
                                }}></div>
                        </>
                    )
                })
            }

        </div>
      </div>
      <Button className={`${styles['main-button']}`} onClick={() => rotate("n")} text="Next"/>
    </div>
  )
}