import React from 'react'
import styles from './Task.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Task extends React.Component {
    deleteTask = () => {
        const { deleteTask, id } = this.props
        deleteTask(id)
    }

    render() {
        const { text } = this.props
        return (
            <div className={styles.container}>
                <Card bg="primary">
                    <Card.Body>{text}</Card.Body>
                    <Button
                        size="small"
                        variant="danger"
                        onClick={this.deleteTask}
                    >
                        Delete
                    </Button>
                </Card>
            </div>
        )
    }
}

export default Task
