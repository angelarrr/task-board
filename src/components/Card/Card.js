import React from 'react'
import './Card.css'

const Card = ({
    id,
    refs,
    task
}) => {

    // dragstart: the user starts dragging an item
    const handleDragStart = (e, id) => {
        e.target.style.opacity = 0.5
        e.dataTransfer.setData("source", id);
        e.dataTransfer.effectAllowed = "move"

        console.log('dragstart')
    }
    
    // dragend: a drag operation ends (such as releasing a mouse button or hitting the Esc key)
    const handleDragEnd = (e) => {
        e.target.style.opacity = 1
        console.log('dragend')
    }

    return (
        <li
            className="task"
            draggable="true"
            // onDragEnter={ handleDragEnter }
            onDragEnd={ handleDragEnd }
            onDragStart={ (e) => handleDragStart(e, id) }
            ref={ refs }
        >
            { task }
        </li>
    )
}

export default Card