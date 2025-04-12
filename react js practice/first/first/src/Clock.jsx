import React,{useState,useEffect} from "react";

function Clock(){
    const [time,sett]=useState(new Date());
    useEffect(()=>{
        const interval=setInterval(e2,1000);

        return ()=>{
            clearInterval(interval);
        }
    },[]);
        
    function e2(){
        sett(new Date());
    }
    function e3(){
        const h=time.getHours();
        const m=time.getMinutes();
        const s=time.getSeconds();
        const a=h>=12 ? "PM" : "AM";
        return `${e4(h)}:${e4(m)}:${e4(s)}-${a}`;
    }
    function e4(num){
        return (num<10 ? "0":"") +num; 
    }
    return(
        <div>
            {e3()}  
        </div>
    );
}

export default Clock