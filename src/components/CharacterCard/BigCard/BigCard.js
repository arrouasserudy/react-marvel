import React from 'react'
import PropTypes from 'prop-types'
import styles from './BigCard.module.css'

const DEFAULT_DESCRIPTION = 'Un personnage marvel'



class BigCard extends React.Component {

    state = {
        comments: [],
        value: '',
        commentDone: false
    }

    componentDidMount() {
        const { name } = this.props
        const comment = localStorage.getItem(name)
        if (comment) {
            this.setState({value: comment, commentDone: true})
        }
    }

    onChange = event => {
        let value = event.target.value
        if (value === '4') {
            return
        }

        this.setState({value})
    }

    close = () => {
        const { setId } = this.props
        setId(null)
    }

    onSubmit = (event) => {
        event.preventDefault()
        const {value} = this.state
        // this.setState({commentDone: true}, () => {
        //     const {value} = this.state
        //     localStorage.setItem(name, value)
        // })

        const newComments = [...this.state.comments, value]
        this.setState({comments: newComments}, () => {
            this.setState(
                    { value: '' }
                )
        })

    }

    render() {
        const { name, description, isHero, getColor } = this.props
        const { commentDone, comments } = this.state

        return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={`${styles.image} ${styles[getColor(isHero)]}`}/>
                    <div className={styles.name}>{name}</div>
                    <div style={{fontSize: 32, margin: 30}} onClick={this.close}>X</div>
                </div>
                <div className={styles.description}>{description}</div>
                <div className={styles.comment}>
                    {comments.map((comment) => {
                        return (<div key={comment}>
                            {comment}
                        </div>)
                    })}

                    <div>
                        <form onSubmit={this.onSubmit}>
                            <input onChange={this.onChange}/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

BigCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isHero: PropTypes.bool,
}

BigCard.defaultProps = {
    description: DEFAULT_DESCRIPTION,
}

export default BigCard
