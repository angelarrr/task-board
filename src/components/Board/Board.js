import React, { useState } from 'react'
import './Board.css'

const Board = ({
    boardName,
    children,
    handleDragOver,
    handleDrop
}) => {

    const [add, setAdd] = useState(false)

    const handleAdd = () => {
        console.log('add')
        setAdd(!add)
    }

    return (
        <div
            className="board"
            onDragOver={ (e) => handleDragOver(e) }
            onDrop={ handleDrop }
        >

            <div className="wrapper">

                <h3>{ boardName }</h3>

                <ul className="board-tasks">
                    { children }
                </ul>

                {/* TODO: input to add and close icon next to Add Card button */}

                { !add
                    ? <button className="btn" onClick={ handleAdd }>+ Add another card</button>
                    : <button className="btn btn-add" onClick={ handleAdd }>Add Card</button>
                }

            </div>

        </div>
    )
}

export default Board