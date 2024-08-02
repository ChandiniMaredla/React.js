import { Component } from "react";
import React from "react";
class User extends Component{
    constructor(){
        super();
        this.state={
            user: {name:'chandini',gender:'female',value:true},
            age: 20
        }
       
    }
    update=()=>{
        if(this.state.user.value === true)console.log(this.state)
        return this.setState({user:{...this.state.user,name:'cherry'}})
    }
    render(){
        return (
            
            <div><h4>{this.state.user.name}</h4>
            <h4>{this.state.user.gender}</h4>
            <button onClick={this.update}>update</button>
            </div>
        )
    }
    
}

export default User;