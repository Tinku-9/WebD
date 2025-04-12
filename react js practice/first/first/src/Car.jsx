
import React,{useState} from "react";

function Car(){
    const [car,setc]=useState({
                    name:"Ford",
                    year:2024
    });
    function e1(e){
        setc(c=>({...c ,year:e.target.value}));
    }
    function e2(e){
        setc(c=>({...c,name:e.target.value}));
    }
    return(
        <div>
            <p>
                My favorite car :{car.year} &nbsp; {car.name}
            </p>
            <input type="number" value={car.year} onChange={e1}/> <br/>
            <input value={car.name} onChange={e2}/>
        </div>
    );
}

export default Car