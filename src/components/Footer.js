import React from 'react'

function Footer(props) {
    return (
        <footer className="footer" style={{display: 'block'}}>
            <span className="todo-count"><strong>{props.todoItems.length}</strong> items left</span>
            <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed"></button>
        </footer>
    )
}

export default Footer