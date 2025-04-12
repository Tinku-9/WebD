import React,{useState,useEffect} from "react";

function Count(){
    const [c,setc]=useState(0);
    const [col,setcol]=useState("green");
    function e1(){
        setc(c1=> c1+1);
    }
    function e2(){
        setc(c1=> c1-1);
    }
    function e3(){
        setcol(c1 => c1==="green" ? "red" : "green");
    }
    useEffect(e4,[]);  //[c,col] or [c] or [col] or 
    function e4(){
        document.title=`Count : ${c} Color: ${col}`;
    }
    return(
        <div>
            <h1 style={{color:col}}>Count : {c}</h1>
            <button onClick={e1}>Add</button>
            <button onClick={e2}>Sub</button>
            <button onClick={e3}>Col</button>

        </div>
    );
}

export default Count