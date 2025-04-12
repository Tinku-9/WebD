
import React,{useState} from "react";

function Fruit(){
    const [fruit,setf]=useState(["Apple","banana","orange"]);
    const list=fruit.map((fruit,index)=><li key={index} onClick={()=>e2(index)}>{fruit}</li>);
    function e1(){
        const f1=document.getElementById("id1").value;
        document.getElementById("id1").value="";
        setf(c=>[...c,f1]);
    }
    function e2(index){
        setf(fruit.filter((_,i)=> i!=index));
    }
    return(
        <div>
            <h1>Fruits</h1>
            <ul>
                {list}
            </ul>
            <input id="id1" placeholder="Enter fruit name" /> &nbsp;
            <button onClick={e1} >Add</button>
        </div>
    );
}

export default Fruit 