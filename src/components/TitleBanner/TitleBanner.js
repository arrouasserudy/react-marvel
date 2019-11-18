import React from 'react'
import styles from '../TitleBanner/TitleBanner.module.css'
import marvelImage from '../../assets/marvel-img.png'
import Timer from '../Timer/Timer'
import axios from 'axios'
import {findCharacter} from '../../api/marvelAPI'

const onClick = async () => {
    const re = findCharacter('spider')
    console.log(re)
    const response = await axios.get(re)
    console.log(response)
}

const TitleBanner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={marvelImage} alt="marvel"/>
            <Timer/>
            <button onClick={onClick}>Test Marvel API</button>
        </div>
    )
}

export default TitleBanner
