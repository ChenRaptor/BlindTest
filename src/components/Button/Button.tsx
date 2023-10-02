import { MouseEventHandler } from "react";
import styles from './Button.module.scss'

export default function Button({
    onClick, 
    text, 
    className
} : {
    onClick?: MouseEventHandler<HTMLButtonElement>, 
    text?: string,
    className?: string
}) {
    return (
        <button className={`${styles.main} ${className || ''}`} onClick={onClick}>
            {text}
        </button>
    )
}