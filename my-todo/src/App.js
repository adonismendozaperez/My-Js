import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import { task } from './mytodo.json'
import AddTodoForm from './Components/AddTodoForm'

class App extends Component {
constructor(){
  super();
  this.state = {
    task
  }
}
  render() {
   const td = this.state.task.map((task , i)=>{
      return (
        <div className="col-md-3">
          <div className="card mt-4">
            <div className="card-header">
             <h5> {task.title} </h5>
            <span className="badge badge-pill badge-info ml-2">
              {task.priority}
            </span>
            </div>

            <div className="card-body">
              <p>{task.descripton}</p>
            </div>
            <div className="card-footer">
            <p className="card-text"><small className="text-muted"> created by: {task.responsible}</small></p>
            </div>
          </div>
        </div>
      )
      
    })
    return (
      <div  className="App" >
        <Navbar title="my-Todo"/>
        
        

        <div className="container">
        
        
          <div className="row mt-2">
          <div className="col-3"> <AddTodoForm/> </div>
             {td}
          </div>
        </div>  
      
      </div>
    );
  }
}

export default App;
