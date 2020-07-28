import React from 'react'
import styles from './Task.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import styled, { keyframes } from 'styled-components'
import { bounceInRight, bounceOutDown } from 'react-animations'

const animationIn = keyframes`${bounceInRight}`
const animationOut = keyframes`${bounceOutDown}`

const DivIn = styled.div`
    animation: 3s ${animationIn};
`

const DivOut = styled.div`
    animation: 3s ${animationOut};
`

class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            start: true,
            value: props.text,
            editable: false,
            completed: false
        }
    }

    deleteTask = () => {
        const { deleteTask, id } = this.props
        this.setState({ start: false }, () => {
            setTimeout(() => {
                deleteTask(id)
            }, 3000)
        })
    }

    onEdit = () => {
        const {editTask, id} = this.props
        const {editable, value} = this.state
        if (!editable) {
            this.setState({ editable: true })
        } else {
            editTask(id, value)
            this.setState({ editable: false})
        }
    }

    onComplete = () => {
        this.setState({completed: true})
    }

    onChange = event => {
        this.setState({ value: event.target.value })
    }

    render() {
        const { text, priority } = this.props
        const { start, value, editable, completed } = this.state
        const BouncyDiv = start ? DivIn : DivOut
        const completedStyle = completed ? styles.completed : styles.notCompleted
        return (
            <BouncyDiv>
                <div className={styles.container}>
                    <Card bg="primary">
                        {editable ? (
                            <input value={value} onChange={this.onChange} />
                        ) : (
                            <Card.Body><div className={completedStyle}>
                                {text}
                                {priority}
                            </div></Card.Body>
                        )}

                        <Button
                            size="small"
                            variant="outline-secondary"
                            onClick={this.onEdit}
                        >
                            {editable ? 'Confirm' : 'Edit'}
                        </Button>
                        <Button
                            size="small"
                            variant="outline-secondary"
                            onClick={this.onComplete}
                        >
                            Completed
                        </Button>
                        <Button
                            size="small"
                            variant="danger"
                            onClick={this.deleteTask}
                        >
                            Delete
                        </Button>
                    </Card>
                </div>
            </BouncyDiv>
        )
    }
}

export default Task
