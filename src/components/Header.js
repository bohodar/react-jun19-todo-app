import React from 'react'

function Header(props) {
    const { onClick, onSubmit, userText, onChange } = props;
    return (
        <header className="header">
            <h1 onClick={onClick}>todos App</h1>
                <form onSubmit={onSubmit}>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus=""
                        value={userText}
                        onChange={onChange}
                    />
                </form>
        </header>
    )
}

export default Header
