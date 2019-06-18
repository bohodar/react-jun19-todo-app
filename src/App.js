import React from 'react';
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
    this.setState((prev) => {
        return {
            ...prev, userText: eValue
        }
    })
  };
  onCheckboxChange = (number) => {
    this.setState((prev) => {
        const copyTodoArr = prev.todoItems;
        copyTodoArr[number].completed = !copyTodoArr[number].completed;
        return {
            ...prev,
            todoItems: [...copyTodoArr]
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
                      completed: false
                  },
                  ...prev.todoItems
              ],
              userText: ''
          }
      });
  };

  onDeleteItem = (number) => {
      this.setState((prev) => {
          const copyTodo = prev.todoItems;
          copyTodo.splice(number, 1);
          return {
              ...prev,
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
        {this.state.todoItems.length > 0 ? <Footer todoItems={this.state.todoItems} /> : null}
      </section>
    )
  }

}

export default App;