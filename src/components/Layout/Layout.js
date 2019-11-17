import React, {Component} from 'react'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"

class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className={styles.container} >
                <Header />
                <div className={styles.children}>
                    {children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout
