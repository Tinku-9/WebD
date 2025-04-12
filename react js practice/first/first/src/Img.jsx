import Im from './assets/react.svg'

function Img(){
    const eventHandle=(e)=>{
        e.target.style.display="none";
    }
    return(
        <img onClick={(e)=>eventHandle(e)} src={Im}></img>
    );
}

export default Img