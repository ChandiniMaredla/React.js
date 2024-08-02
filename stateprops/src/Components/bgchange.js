import React,{Component} from "react";
class Bgchange extends React.Component
{
    constructor(){
        super();
        this.state={
            text: "Helllo",
            name:"chandini"
        }}
        update=()=>{
            this.setState({...this.state.text,name:'cherry'})
        }
        render(){
            return(
                <div>{this.state.text}{this.state.name}
                <button onClick={this.update}>click</button>
                </div>
            )
        }
    
}
export default Bgchange 