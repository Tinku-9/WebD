import React,{useContext} from "react";
import {User} from './C1.jsx'

function C4(){
    const user =useContext(User);
    return(
        <div className="box">
            Component4
            Bye {user}!
        </div>
    );
}

export default C4