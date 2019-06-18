import React from 'react'

function Header(props) {

    return (
        <header className="header">
            <h1 onClick={props.onClick}>todos App</h1>
                <form onSubmit={props.onSubmit}>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus=""
                        value={props.userText}
                        onChange={props.onChange}
                    />
                </form>
        </header>
    )
}

export default Header
