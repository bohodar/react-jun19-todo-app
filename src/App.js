import React from 'react';
import './App.css'
import Header from './components/Header'
import MainBody from './components/MainBody'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      userText: '',
    }
  };

  onTextFieldChange = (event) => {
    const eValue = event.target.value;

    this.setState({
        userText: eValue
      }
    )
  };
  onCheckboxChange = (number) => {
    this.setState((prevState) => {
      const copyTodoArr = [...prevState.todoItems];

      copyTodoArr[number] = {
        ...copyTodoArr[number],
        completed: !copyTodoArr[number].completed
      };

      return {
        todoItems: copyTodoArr
      }
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => {
      return {
        todoItems: [
          {
            text: prev.userText,
            completed: false,
            classForCompleted: null,
            id: Date.now()
          },
          ...prev.todoItems
        ],
        userText: ''
      }
    });
  };

  onDeleteItem = (number) => {
    this.setState((prev) => {
      const copyTodo = [...prev.todoItems];
      copyTodo.splice(number, 1);
      return {
        todoItems: [...copyTodo]
      }
    })
  };

  render() {
    return (
      <section className="todoapp">
        <Header
          todoitems={this.state.todoItems}
          onChange={this.onTextFieldChange}
          userText={this.state.userText}
          onSubmit={this.onSubmit}
          onClick={this.onClick}
        />
        <MainBody
          todoItems={this.state.todoItems}
          onChange={this.onCheckboxChange}
          onDeleteItem={this.onDeleteItem}
        />
        {this.state.todoItems.length > 0 ? <Footer todoItems={this.state.todoItems}/> : null}
      </section>
    )
  }

}

export default App;
