import React, { Component } from 'react';

class AddTodoForm extends Component{
    constructor(){
        super();
        this.state = {
            'taskID' : '',
            'title' : '',
            'responsible' : '',
            'descripton' : '',
            'priority' : ''
        }
    }
    handleInput(){
        console.log("Writing")
    }
    render(){
        return(
            <div className="card">
            <div className="card-header">
                <h5>Add Task</h5>
            </div>
            <form className="card-body">
                <div className="form-group">
                    <input type="text" 
                           onChange={ this.handleInput }
                           className="form-control"
                           id="inputTitle"
                           placeholder="Title" />       
                </div>
                
                <div className="form-group">
                    <input type="text" 
                           className="form-control"
                           id="inputResponsible"
                           placeholder="Responsible" />       
                </div>
                
                <div className="form-group">
                    <input type="text" 
                           className="form-control"
                           id="inputDescripton"
                           placeholder="Description" />       
                </div>
                
                <div className="form-group">
                    <input type="text" 
                           className="form-control"
                           id="inputPriority"
                           placeholder="Priority" />       
                </div>
                <button type="submit" className="btn btn-primary my-1">Add</button>
            </form>
            </div>
        )
    }
}


export default AddTodoForm;