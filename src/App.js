import React, { useState, useEffect } from 'react'
import { Board, Card } from './components'
import './App.css';

const App = () => {

    const boards = [
        { name: 'To Do', status: 'todo' },
        { name: 'In Progress', status: 'wip' },
        { name: 'QA', status: 'qa' },
        { name: 'Done', status: 'done' }
    ]

    

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const list = [
            { id: 1, task: 'something to do', status: 'todo' },
            { id: 2, task: 'something else to do', status: 'todo' },
            { id: 3, task: 'something that is being done', status: 'wip' },
            { id: 4, task: 'qa task to do', status: 'qa' },
            { id: 5, task: 'done task', status: 'done' }
        ]

        setTasks([].concat(list))
    }, [])
    
    
    // drop: an item is dropped on a valid drop target
    const handleDrop = (e, stat) => {
        e.preventDefault();
        const draggedTask = e.dataTransfer.getData("source")
        const taskIndex = tasks.findIndex(task => task.id === Number(draggedTask))
        const newTasks = [ ...tasks ]
        newTasks[taskIndex] = { ...newTasks[taskIndex], status: stat }

        setTasks(newTasks)
    }

    // dragover: a dragged item is being dragged over a valid drop target, every few hundred milliseconds
    const handleDragOver = (e) => {
        // TODO: add styles when dragging over
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className="App">
            <div className="task-board">

                { boards.map((board, i) => {

                    const { name, status } = board
                    return (
                        <Board
                            boardName={ name }
                            handleDrop={ (e) => handleDrop(e, status) }
                            handleDragOver={ handleDragOver }
                            key={ i }
                        >
                            { tasks.filter(task => task.status === status).map((item, i) => {

                                const { id, task } = item

                                return (
                                    <Card
                                        key={ i }
                                        id={ id }
                                        task={ task }
                                    />
                                )
                            }) }
                        </Board>
                    )
                })}

            </div>
        </div>
    );
}

export default App;
