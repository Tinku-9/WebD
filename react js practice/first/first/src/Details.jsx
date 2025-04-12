import React,{useState} from "react";

function Details(){
    const [name,setName]=useState("none");
    const [age,setAge]=useState(0);
    const eventHandle1=()=>{
        setName("Varun");
    }

    const eventHandle2=()=>{
        setAge(age+1);      //a=>a+1 (update function)
    }
    //para has onclick
    return(<div>
        <p onClick={eventHandle1}>Name :{name}</p>  
        <p onClick={eventHandle2}>Age: {age}</p>
    </div>);
}

export default Details