import React,{useState} from "react";

function Car2(){
    const [car,setc]=useState([]);
    const [y,sety]=useState(new Date().getFullYear());
    const [mod,setm]=useState("");
    function e1(e){
        sety(e.target.value);
    }
    function e2(e){
        setm(e.target.value);
    }
    function e3(){
        const newcar={year:y,model:mod};
        setc(c=>[...c,newcar]);
        sety(new Date().getFullYear());
        setm("");
    }
    function e4(index){
        setc(c=> c.filter((element,i)=> {return i!==index}));
    }
    const list=car.map((c,index)=><li key={index} onClick={()=>e4(index)}>{c.year}:{c.model}</li>);
    return(
        <div>
            <h1>Cars</h1>
            <ul>
                {list}
            </ul>
            <input type="number" onChange={e1} value={y}/>
            <input onChange={e2} value={mod} placeholder="Enter model"/>
            <button onClick={e3}>Add</button>

        </div>
    );
}

export default Car2