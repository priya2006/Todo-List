import React from 'react'
import Todo from './todo'
import '../App.css'

export default class List extends React.Components{
    state = {
        task : [
            'this is first',
            "this is second",
            "this is third",
        ]
    }
    editTask(newText,i){
       var arr = this.state.task;
       arr[i]=newText;
       this.setstate({task:arr})
    }
    removeTask(i){
        var arr = this.state.task;
        arr.splice(i,1)
        this.setState({task:arr});
    }
    eachTask(text,i){
        return <Todo key={i} index={i} edit={this.editTask.bind(this)} remove={this.removeTask.bind(this)}>
            {text}
        </Todo>
    }
    render(){
        return(
           <div className="todobox">
           {
     this.state.task.map(this.eachTask.bind(this))
           }
           
           </div>
        );
    }
}