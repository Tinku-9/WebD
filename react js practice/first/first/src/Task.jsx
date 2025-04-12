
import React,{useState} from "react";
import Button from "./Button";

function Task(){
    const [task,sett]=useState([]);
    const [newtask,setn]=useState("");
    function e1(e){
        setn(e.target.value);
    }
    function e2(e){
        if(newtask.trim()!==""){
            sett(t=>[...t,newtask]);
            setn("");

        }
        
    }
    function e3(index){
        const up=task.filter((_,i)=> i!== index);
        sett(up);
    }
    function e4(index){
        const up=[...task];
        if(index>0){
            [up[index-1],up[index]]=[up[index],up[index-1]];
            sett(up);
        }
        
    }
    function e5(index){
        const up=[...task];
        if(index<task.length-1){
            [up[index],up[index+1]]=[up[index+1],up[index]];
            sett(up);
        }
    }
    const list=task.map((t,index)=><li key={index}>{t} &nbsp; 
                                <button onClick={()=>e3(index)}>Del</button> &nbsp;
                                <button onClick={()=>e4(index)}>Up</button> &nbsp;
                                <button onClick={()=>e5(index)}>Down</button></li>);
    return(
        <div>
            <input placeholder="Enter task" onChange={e1} value={newtask}/> &nbsp; 
            <button onClick={e2}>Add</button>
            <br/>
            <ol>
                {list}
            </ol>
        </div>
    );
}

export default Task