import React,{ useState ,createContext} from 'react';
import C2 from './C2'

export const User =createContext();

function C1(){
    const [user,setu]=useState("Varun");
    return(
        <div className="box">
            Component1
            Hello {user}!
            <User.Provider value={user}>
            <C2/>
            </User.Provider>
            
        </div>
    );
}

export default C1

