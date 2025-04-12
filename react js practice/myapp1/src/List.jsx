function List(){
    const fruits=["apple","orange","banana"];
    const fruitss=[
              {id:1, name:"Tinku"},
              {id:2, name:"Varun"},
              {id:3, name:"JK"},
              {id:4, name:"Kishan"},
              {id:5,name:"Sridhar"},
              {id:6, name:"Shakthi"},
              {id:7,name:"Nalveen"}
    ];
    const fruits1= fruitss.map(fruit=> <li key={fruitss.id}>{fruit.name}</li>);
    return (<>
    {fruits1}
    {fruits}
    </>);

}
export default List