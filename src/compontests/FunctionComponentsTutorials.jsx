// rcc

import {  useState } from "react";

function FunctionComponentsTutorials (props){
   //state
const [count,setCount] = useState(0);
    //cdm
    //event
    const countPlusHandClick=()=>{
      setCount(count+1);
    } //end event
    const countMinusHandClick=()=>{
        setCount(count-1);
    } //end event
    return(
        <div>
                <h1>Function Components Tutorials</h1>
                <p>count : {count} </p>
                <button  className = "btn btn-primary" onClick={countPlusHandClick}>+</button>
                <button  className = "btn btn-danger ms-2" onClick={countMinusHandClick}>-</button>
         </div>
    );
}// end classcomponentTutorials
export default FunctionComponentsTutorials;