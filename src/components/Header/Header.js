import React, {Component} from 'react'
import styles from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div className={styles.container} >
                <div>My WebApp</div>
                <div className={styles.links}>
                    <a href='#'>Homepage</a>
                    <a href='#'>Favorite</a>
                </div>
            </div>
        )
    }
}

export default Header
