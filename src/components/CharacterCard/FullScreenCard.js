import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../CharacterCard/CharacterCard.module.css'

class FullScreenCard extends Component {
    state = {
        haveComment: false,
        comment: ''
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({haveComment: true})
    }

    onEdit = () => {
        this.setState({haveComment: false})
    }

    onChange = e => {
        this.setState({comment: e.target.value})
    }

    render() {
        const { name, description, color, setFullScreenId } = this.props
        const { haveComment, comment } = this.state

        return (
            <div className={styles.fullScreenContainer}>
                <div className={`${styles.fullScreenImage} ${styles[color]}`} />
                <div className={styles.fullScreenBody}>
                    <div>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.description}>{description}</div>
                    </div>
                    <div className={styles.commentContainer}>
                        {!haveComment ? (
                            <div>
                                <form onSubmit={this.onSubmit}>
                                    <input
                                        placeholder="Type your comment..."
                                        onChange={this.onChange}
                                        value={comment}
                                    />
                                </form>
                            </div>
                        ) : (
                            <div className={styles.comment}>
                                <div>{comment}</div>
                                <button onClick={this.onEdit}>Edit</button>
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className={styles.close}
                    onClick={() => setFullScreenId(null)}
                >
                    X
                </div>
            </div>
        )
    }
}

FullScreenCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    fullScreen: PropTypes.bool,
    setFullScreenId: PropTypes.func,
}

export default FullScreenCard
