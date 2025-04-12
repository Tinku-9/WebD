
function Greeting(){
    var isMorning=true;
    if(isMorning==true){
        return(
            <div>Good Morning</div>
        );
    }
    else{
        return(
            <div>Good evening</div>
        );
    }
}

export default Greeting