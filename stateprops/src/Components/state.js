import React from "react";
class State extends React.Component{
    state={
      name:'chandini'
    }
    update=()=>{
     return this.setState({name:'cherry'})
    }
    render(){
      return (
       <div><h1>{this.state.name}</h1>
        <button onClick={this.update}>Click</button></div> 
      )
    }
  }

  export default State