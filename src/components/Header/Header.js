import React, {Component} from 'react'
import styles from './Header.module.css'
import {Link} from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <div className={styles.container} >
                <div className={styles.title}>Rudy's Webapp</div>
                <div className={styles.links}>

                    <Link className={styles.link} to='/'>Homepage</Link>
                    <Link className={styles.link} to='/favorites'>Favorite</Link>
                </div>
            </div>
        )
    }
}

export default Header
