import React, { Fragment } from 'react'
import styles from './Layout.module.css'
import { Link } from 'react-router-dom'

class Layout extends React.Component {
    state = {
        isOpen: false,
    }

    toggleBurger = () => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}))
    }

    render() {
        const { children } = this.props
        const { isOpen } = this.state
        return (
            <div className={styles.container}>
                    <button onClick={this.toggleBurger}>BURGER</button>
                    {isOpen && (
                        <div className={`${styles.burger} ${styles.burger2}`}>
                            <Link style={{ color: 'black' }} to="todo/aaa">
                                {'Todo list'}
                            </Link>
                            <Link style={{ color: 'black' }} to="/">
                                {'Marvel'}
                            </Link>
                        </div>
                    )}
                <div className={styles.app}>
                    <div className={styles.header}>
                        <Link to="todo/aaa">{'Todo list'}</Link>
                        <Link to="/">{'Marvel'}</Link>
                        <Link style={{ color: 'black' }} to="/settings">
                            {'Settings'}
                        </Link>
                        <Link style={{ color: 'black' }} to="/favorites">
                            {'Favorites'}
                        </Link>
                    </div>
                    {children}
                    <div className={styles.header}>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout
