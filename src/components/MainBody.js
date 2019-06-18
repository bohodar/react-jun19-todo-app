import React from 'react'
import TodoItem from './TodoItem'

function MainBody(props) {
    return (
        <section className="main" style={{display: 'block'}}>
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {props.todoItems.length ?
                    props.todoItems.map((todoItem, number) => {
                        return (
                            <TodoItem
                                text={todoItem.text}
                                completed={todoItem.completed}
                                index={number}
                                onChange={() => props.onChange(number)}
                                onDeleteItem={() => props.onDeleteItem(number)}
                                key={number}
                            />
                        )
                    }) : null
                }
            </ul>
        </section>
    )
}

export default MainBody