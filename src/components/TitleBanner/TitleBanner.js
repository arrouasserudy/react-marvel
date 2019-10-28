import React from 'react'
import styles from '../TitleBanner/TitleBanner.module.css'
import marvelImage from '../../assets/marvel-img.png'

const TitleBanner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={marvelImage} alt="marvel" />
        </div>
    )
}

export default TitleBanner
