import React, {Component} from 'react';
import Row from './Row';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos : [],
      newTodo : "",
      sendWord : "Send",
      toModify : 0
    };
  }

  createNewLine() {
    if(this.state.newTodo != '') {
      let oldTodos = JSON.parse(JSON.stringify(this.state.todos));
      if(this.state.toModify != 0) {
        oldTodos[this.state.toModify-1] = this.state.newTodo;
        this.state.toModify = 0;
      }
      else {
        oldTodos.push(this.state.newTodo);
      }
      this.setState({todos:oldTodos, newTodo:'', sendWord:"Send"});
    }
  }

  inputValueChanged(e) {
     this.setState({newTodo:e.target.value});
  }

  deleteLine(id) {
    let oldTodos = JSON.parse(JSON.stringify(this.state.todos));
    oldTodos.splice(id, 1);
    if(this.state.toModify != 0) {
      this.state.toModify = 0;
      this.setState({sendWord:"Send"});
    }
    this.setState({todos:oldTodos});
  }

  modifyLine(id) {
    this.state.toModify = id+1;
    this.state.newTodo = this.state.todos[id];
    this.setState({sendWord:"Modify"});
  }

  render() {
    var myTodos = [];
    for(let i = 0; i < this.state.todos.length; i++) {
      myTodos.push((<Row todoText={this.state.todos[i]}
        key={i}
        keyVal={i}
        deleteLine={this.deleteLine.bind(this)}
        modifyLine={this.modifyLine.bind(this)}
        />));
    }

      return (
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <div className="form-group">
                  <input className="form-control" value={this.state.newTodo} onChange={(e)=>this.inputValueChanged(e)} type="Text"/>
                </div>
              </div>
              <div className="col-xs-2">
                <button className="btn btn-success" type="button" onClick={()=>this.createNewLine()}>{this.state.sendWord}</button>
              </div>
              <div className="col-xs-6"/>
            </div>
            {myTodos}
          </div>
      )
    }
}

export default App
