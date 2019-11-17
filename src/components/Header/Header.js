import React, {Component} from 'react'
import styles from './Header.module.css'
import {Link} from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <div className={styles.container} >
                <div>My WebApp</div>
                <div className={styles.links}>
                    <Link to='/'>Homepage</Link>
                    <Link to='/favorites'>Favorite</Link>
                </div>
            </div>
        )
    }
}

export default Header
