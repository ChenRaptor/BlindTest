"use client"
import { useState } from 'react'
import styles from './page.module.scss'
import Sound from '@components/Sound/Sound'
import UserList from '@components/UserList/UserList'
import ScoreBoard from '@components/ScoreBoard/ScoreBoard'
import Answer from '@components/Answer/Answer'

export default function Home() {

  const [user, setUser] = useState<string[]>(['Jean','Marie','Rose','Albert','Hugo'])


  return (
    <main className={styles.main}>
      <div>
        <ScoreBoard game={user}/>
        <UserList list={user}/>
      </div>
      <Sound/>
      <Answer/>
    </main>
  )
}
