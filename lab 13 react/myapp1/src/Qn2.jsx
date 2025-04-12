function Qn2(){
    const fruits=["Apple","Orange","Pineapple"];

    return (
        <div>
            <ul>
                {fruits.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default Qn2 ;