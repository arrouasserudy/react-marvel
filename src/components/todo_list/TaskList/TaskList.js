import React from 'react'
import styles from './TaskList.module.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Task from '../Task/Task'

class TaskList extends React.Component {
    state = {
        tasks: [],
        value: '',
        show: false,
    }

    toggleModal = () => {
        this.setState(state => ({ show: !state.show }))
    }

    counter = 0

    onChange = event => {
        this.setState({ value: event.target.value })
    }

    onAddTask = () => {
        const { value } = this.state
        if (!value) {
            return
        }
        this.counter++
        this.setState(
            state => ({
                tasks: [
                    ...state.tasks,
                    { text: state.value, id: this.counter },
                ],
            }),
            () => {
                this.setState({ value: '' })
                this.toggleModal()
            },
        )
    }

    deleteTask = (taskId) => {
        const {tasks} = this.state
        const filtered = tasks.filter(task => {
            return taskId !== task.id
        })
        this.setState({tasks: filtered})
    }

    renderModal = () => {
        const {show, value} = this.state
        return (
            <Modal show={show}>
                <Modal.Header closeButton onClick={this.toggleModal}>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input value={value} onChange={this.onChange} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggleModal}>Close</Button>
                    <Button variant="primary" onClick={this.onAddTask}>Add task</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        const { value, tasks } = this.state

        return (
            <div className={styles.container}>
                <Button
                    size={'lg'}
                    variant="secondary"
                    onClick={this.toggleModal}
                >
                    + New Task
                </Button>

                {this.renderModal()}
                {tasks.map(task => (
                    <Task key={task.id} id={task.id} text={task.text} deleteTask={this.deleteTask} />
                ))}
            </div>
        )
    }
}

export default TaskList
