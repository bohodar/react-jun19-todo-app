import React from 'react'

function TodoItem(props) {
  const { completed, onChange, text, onDeleteItem } = props;
  return (
    <li className={completed ? "completed" : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onChange}
        />
        <label>{text}</label>
        <button
          className="destroy"
          onClick={onDeleteItem}
        ></button>
      </div>
    </li>
  )
}

export default TodoItem
