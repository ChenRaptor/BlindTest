import { ReactNode } from 'react';
import styles from './Card.module.scss'

export default function Card({
    children,
    fit
} : {
    children: ReactNode 
    fit?: boolean
}) {
    return (
        <div className={`${styles.main} ${fit ? styles.cardCarrousel : ''}`}>
            {children}
        </div>
    )
}