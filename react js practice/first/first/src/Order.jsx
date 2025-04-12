
import React,{useState} from "react";

function Order(){
    const [name,setn]=useState("");
    const [quan,setq]=useState(1);
    const [pay,setp]=useState("");
    const [del,setd]=useState("");
    const col="white";

    function e1(e){
        setn(e.target.value);
    }
    function e2(e){
        setq(e.target.value);
    }
    function e3(e){
        setp(e.target.value);
    }
    function e4(e){
        setd(e.target.value);
    }
    return(
        <div>
            <p>
                <input value={name} onChange={e1} style={{backgroundColor:"black",color:col}} /><br/>
                Name:{name}
            </p>
            <p>
                <input value={quan} onChange={e2} type="number"/><br/>
                Quantity:{quan}
            </p>
            <p>
                <select value={pay} onChange={e3}>
                    <option hidden value="">Select option</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                </select> <br/>
                Payment:{pay}
            </p>
            <p>
                
                <label>
                <input type="radio" value="Pick up" checked={del==="Pick up"} onChange={e4}/>
                    Pick up
                </label>
                
                <label>
                <input type="radio" value="Door delivery" checked={del==="Door delivery"} onChange={e4}/>
                    Door delivey
                </label>
                <br/>
                Choosen:{del}
            </p>
        </div>
    );
}

export default Order