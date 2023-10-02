import styles from './ScoreBoard.module.scss'
import React from 'react'

type scoreBoardProps = {
    game : string[];
}

function Score ({game} : scoreBoardProps) {
    return (
        <section className={styles.score}>
            <h2>Scoreboard</h2>
            <div>
                {game.map((player,index) => 
                    <React.Fragment key={index}>
                        <p>{player}</p>
                        <p>{index*1000}</p>
                    </React.Fragment>
                )}
            </div>
        </section>
    )
}

export default Score