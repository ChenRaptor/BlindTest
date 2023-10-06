"use client"
import Button from '@components/Button/Button';
import styles from './Carrousel3D.module.scss'
import { ReactElement, useEffect, useState } from 'react';

export default function Carrousel3D({carrouselItems, gapCenter, setter} : { carrouselItems : ReactElement[], gapCenter : number, setter : any }) {

  const [index, setIndex] = useState({
    selected: 0,
    deg: 0
  });



  // const [rotation, setRotation] = useState(0);

  const arrayOption = ['aleatoires','musiques_films','musiques_animes','musiques_series','repliques_films','repliques_animes','repliques_series'];


  const gapRotation = 360 / carrouselItems.length

  useEffect(() => {
    console.log(index, arrayOption[index.selected])
  },[index])

  const rotate = (direction : string) => {
    if (direction === 'p') {

      setIndex((prev) => {
        if (prev.selected === arrayOption.length - 1) {
          setter(arrayOption[0]);
          return { selected: 0, deg: prev.deg + gapRotation }
        }
        setter(arrayOption[prev.selected + 1]);
        return { selected: prev.selected + 1, deg: prev.deg + gapRotation }
      })


    } else if (direction === 'n') {

      setIndex((prev) => {
        if (prev.selected === 0) {
          setter(arrayOption[arrayOption.length - 1]);
          return { selected: arrayOption.length - 1, deg: prev.deg - gapRotation }
        }
        setter(arrayOption[prev.selected - 1]);
        return { selected: prev.selected - 1, deg: prev.deg - gapRotation }
      })

    }
  };

  return (
    <div className={styles.main}>
      <Button className={`${styles['main-button']}`} onClick={() => rotate("p")} text="Prev"/>
      <div className={styles.container}>
        <div className={styles.carousel} style={{"--rotation": `${index.deg}deg`}}>
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