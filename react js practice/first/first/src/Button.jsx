
function Button(){
    function eventHandle(e){
        e.target.textContent="Ouch!";
    }
    return(
        <button onClick={(e) => eventHandle(e)} className="button">Click me</button>
    );
}

export default Button