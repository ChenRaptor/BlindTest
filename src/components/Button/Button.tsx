import { MouseEventHandler } from "react";
import styles from './Button.module.scss'

export default function Button({onClick, text} : {onClick?: MouseEventHandler<HTMLButtonElement>, text?: string}) {
    return (
        <button className={styles.main} onClick={onClick}>
            {text}
        </button>
    )
}