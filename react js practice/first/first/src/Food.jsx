
function Food(){
    const f1=["Apple","Orange","Ice cream"];

    return(
        <ol>
            {
                f1.map((fruit,index)=>(<li key={index}>
                    {fruit}
                </li>))
            }
        </ol>
    );
}

export default Food