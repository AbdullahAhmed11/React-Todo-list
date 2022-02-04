import React, {Component} from "react"
import TodoItem from "./Components/TodoItem/TodoItem";
import AddItem from "./Components/AddItem/AddItem";

class App extends Component {
  state = {
    items: [
      {id:1, name: 'Abdullah',age:20},
      {id:2, name: 'Ahmed',age:22},
      {id:3, name: 'saber',age:24}
    ]
  }
  deletItems =  (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items});
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }
  render () {
    return (
      <div className="App container">
      <h1 className="text-center">Todo List App</h1>
      <TodoItem items={this.state.items} deletItems={this.deletItems} />
      <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
