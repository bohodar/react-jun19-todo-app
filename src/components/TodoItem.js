import React from 'react'

function TodoItem(props) {
    return (
        <li className="">
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={props.completed}
                    onChange={props.onChange}
                    onClick={(e) => {
                        e.nativeEvent.target.parentNode.classList.toggle('completed')
                    }}
                />
                <label>{props.text}</label>
                <button
                    className="destroy"
                    onClick={props.onDeleteItem}
                ></button>
            </div>
        </li>
    )
}

export default TodoItem
