import React,{useState} from 'react';
function MyComp(){

    const [name,setname]=useState("Gripy");
    const [c,setc]=useState(0);
    const Update=()=>{
        setname("Tinku");
        setc(c=>c+1);
        document.getElementById("p1").innerText=`Hello ${name} you have pressed me ${c} times`;
    }
    return(
        <div>
            <button onClick={Update}>update</button>
            < p id='p1'></p>
        </div>
    );
}
export default MyComp;