import React from 'react'
import '../App.css'

export default class Todo extends React.Component{
    state={
        editing:false,
    }
    edit(){
        this.setState({editing:true})
    }
    remove(){
        //alert("this is the remove button")
        this.props.remove(this.props.index)
    }
    save(){
        this.setState({editing:false})
        var val=this.refs.newText.value;
        this.props.edit(val,this.props.index)
    }
    renderNormal(){
        return(
            <div className="todobox">
               <div className="todoText">{this.props.children}</div>
               <button className="editButton" onClick={this.edit.bind(this)}>Edit</button>
               <button className="removeButton" onClick={this.remove.bind(this)}>Remove</button>
            </div>
        );
    }
    renderForm(){
         return(
    <div classsName="todobox">
    <textarea ref="newText" defaultValue={this.props.children}></textarea><br></br>
    <button className="saveButton" onClick={this.save.bind(this)}>Save</button>
    </div>
         );
    }
    render(){
        if(this.state.editing)
        {
            return this.renderForm()
        }
        else{
            return this.renderNormal()
        }
    }

}