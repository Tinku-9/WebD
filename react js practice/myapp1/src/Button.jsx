function Button(){
    const fun1=(name)=>{
    document.getElementById("id1").innerHTML=`<h2>Hello ${name}</h2>`}; 
    const handleClick=(e)=>{
        console.log(e);
        e.target.style.display="none";
    }
   
  return(
    <>
    <button onClick={()=>fun1("Tinku")} id="id1">Click Me</button>
    <button onClick={(e)=>handleClick(e)}>To know the purpose of event e/click me and ill vanish</button>
    </>
  );
  

}
export default Button;