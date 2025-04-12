
function Student(props){
return(
<>
<h1 style={{color:"yellowgreen"}}> Hello {props.variable}, your age is {props.age}</h1>
</>
);
}
Student.defaultProps={
    age:0,
    variable:"guest",
};
export default Student;