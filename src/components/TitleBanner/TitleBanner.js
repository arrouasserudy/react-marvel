import React from 'react'
import styles from '../TitleBanner/TitleBanner.module.css'
import marvelImage from '../../assets/marvel-img.png'
import Timer from '../Timer/Timer'

const TitleBanner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={marvelImage} alt="marvel"/>
            <Timer/>
        </div>
    )
}

export default TitleBanner
