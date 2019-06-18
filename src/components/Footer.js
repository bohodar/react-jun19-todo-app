import React from 'react'

function Footer(props) {
    return (
        <footer className="footer" style={{display: 'block'}}>
            <span className="todo-count"><strong>{props.todoItems.length}</strong> items left</span>
            <form className="filters">
                <label className="selected">
                    All
                    <input type="radio" name="filter" />
                </label>
                <label>
                    Active
                    <input type="radio" name="filter" />
                </label>
                <label>
                    Completed
                    <input type="radio" name="filter" />
                </label>
            </form>
            <button className="clear-completed"></button>
        </footer>
    )
}

export default Footer
