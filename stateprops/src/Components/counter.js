import React from "react";
class Counter extends React.Component
{
    state={
        c:0
    }
    increment=()=>{
        let val=this.state.c;
        console.log(val)
        val++
        this.setState({c:val})
    }
    decrement=()=>{
        let val=this.state.c;
        console.log(val)
        val--
        this.setState({c:val})
    }
    render(){
        return (
            <div><h3>{this.state.c}</h3>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}

export default Counter