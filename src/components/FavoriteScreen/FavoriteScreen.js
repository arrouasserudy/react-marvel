import React from 'react'
import styles from './FavoriteScreen.module.css'
import axios from 'axios'

class FavoriteScreen extends React.Component {
    onClick = async () => {
        const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
        console.log(response)
    }

    render() {
        return (
            <div className={styles.container}>
                Favorites
                <button onClick={this.onClick}>Test AXIOS</button>
            </div>
        )
    }
}

export default FavoriteScreen
