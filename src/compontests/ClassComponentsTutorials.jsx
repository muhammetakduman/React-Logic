// rcc

import { Component } from "react";

class ClassComponentsTutorials extends Component{
    //Constructor
    constructor(props){
        super(props);
        //state
        this.state = {
            count:0
        }
        this.countPlusHandClick = this.countPlusHandClick.bind(this);
        this.countMinusHandClick = this.countMinusHandClick.bind(this);
    } //end constructor

    //cdm
    //evet
    countPlusHandClick(){
        this.setState({
            count:this.state.count + 1
        })
    } //end event
    countMinusHandClick(){
        this.setState({
            count:this.state.count - 1
        })
    } //end event
    render(){
        return(
            <div>
                <h1>Class Components Tutorials</h1>
                <p>count : {this.state.count} </p>
                <button  className = "btn btn-primary" onClick={this.countPlusHandClick}>+</button>
                <button  className = "btn btn-danger ms-2" onClick={this.countMinusHandClick}>-</button>
            </div>
        )
    };
};// end classcomponentTutorials
export default ClassComponentsTutorials;