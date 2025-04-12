import React,{useEffect, useState,useRef} from "react";

function Input(){
    const r1=useRef(null);
    const r2=useRef(null);
    const r3=useRef(null);
    useEffect(()=>{
        console.log("Component Rendered");
    });
    function h1(){
        r1.current.focus();
        r1.current.style.backgroundColor="yellow";
        r2.current.style.backgroundColor="";
        r3.current.style.backgroundColor="";
        
    }
    function h2(){
        r2.current.focus();
        r1.current.style.backgroundColor="";
        r2.current.style.backgroundColor="yellow";
        r3.current.style.backgroundColor="";
        
    }
    function h3(){
        r3.current.focus();
        r1.current.style.backgroundColor="";
        r2.current.style.backgroundColor="";
        r3.current.style.backgroundColor="yellow";
        
    }
    return(
        <div>
            <br/>
            <br/>
            <input ref={r1} onClick={h1}/> <br/>
            <button >Click</button> <br/>
            <input ref={r2} onClick={h2}/> <br/>
            <button >Click</button> <br/>
            <input ref={r3} onClick={h3}/> <br/> 
            <button >Click</button> <br/>
        </div>
        
    );
}

export default Input