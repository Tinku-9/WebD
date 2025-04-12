
// list can be passed with props
function List(props){
    const fruits=props.items;
    //fruits.sort();
    //fruits.sort((a,b)=> a.name.localeCompare(b.name));
    fruits.sort((a,b)=> {return a.cal - b.cal});
    const lowcal=fruits.filter((fruit) => {return fruit.cal<100});
    const l=lowcal.map(fruit=><li key={fruit.id}>{fruit.name}:{fruit.cal}</li>)
    const list=fruits.map(fruit=> <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.cal}</b></li>);
    return(fruits.length>0 ? <ol>{list}</ol> : null);
}

export default List