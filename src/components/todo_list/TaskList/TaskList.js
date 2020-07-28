import React from 'react'
import styles from './TaskList.module.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Task from '../Task/Task'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class TaskList extends React.Component {
    state = {
        tasks: [],
        value: '',
        priority: 'normal',
        show: false,
    }

    componentDidMount() {
        const tasks = cookies.get('tasks')
        this.counter = 0
        if (tasks) {
            const counter = cookies.get('counter')
            this.counter = counter
            this.setState({ tasks: tasks })
        }
    }

    toggleModal = () => {
        this.setState(state => ({ show: !state.show }))
    }

    onChange = event => {
        this.setState({ value: event.target.value })
    }

    onAddTask = () => {
        const { value, priority } = this.state
        const priorities = [0, 1, 2]
        const pri = priorities[Date.now() % 3]
        if (!value) {
            return
        }
        this.counter++
        this.setState(
            state => ({
                tasks: [
                    ...state.tasks,
                    { text: state.value, id: this.counter, priority: pri },
                ],
            }),
            () => {
                this.setState({ value: '' })
                this.toggleModal()
            },
        )
    }

    deleteTask = taskId => {
        const { tasks } = this.state
        const filtered = tasks.filter(task => {
            return taskId !== task.id
        })
        this.setState({ tasks: filtered })
    }

    editTask = (taskId, value) => {
        const { tasks } = this.state
        const newTasks = tasks.map(task => {
            if (taskId === task.id) {
                return {
                    id: task.id,
                    text: value,
                }
            } else {
                return task
            }
        })
        this.setState({ tasks: newTasks })
    }

    renderModal = () => {
        const { show, value } = this.state
        return (
            <Modal show={show}>
                <Modal.Header closeButton onClick={this.toggleModal}>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input value={value} onChange={this.onChange} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggleModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onAddTask}>
                        Add task
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    save = () => {
        const { tasks } = this.state
        // const date = new Date(new Date.getTime() + 5*60000)
        cookies.set('tasks', JSON.stringify(tasks), { path: '/' })
        cookies.set('counter', JSON.stringify(this.counter), { path: '/' })
    }


    sortByPriority = () => {
        const { tasks } = this.state
        const newTasks = [...tasks]

        newTasks.sort(function(a, b) {
            return a.priority - b.priority
        })

        this.setState({tasks: newTasks})

    }

    render() {
        const { tasks } = this.state

        return (
            <div className={styles.container}>
                <Button
                    size={'lg'}
                    variant="secondary"
                    onClick={this.toggleModal}
                >
                    + New Task
                </Button>
                <Button size={'lg'} variant="secondary" onClick={this.sortByPriority}>
                    Save to cookie
                </Button>

                {this.renderModal()}
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        priority={task.priority}
                        deleteTask={this.deleteTask}
                        editTask={this.editTask}
                    />
                ))}
            </div>
        )
    }
}

export default TaskList
