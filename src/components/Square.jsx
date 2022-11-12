import {useState} from "react";
export default function Square(props){
 //let value= null;
 //const [value, setvalue]=useState(null);
  function handleClick(){
    //console.log("Clicked");
    //setvalue(value+1);
    //console.log(value);
  }
    return(
 
    <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    

    );

}