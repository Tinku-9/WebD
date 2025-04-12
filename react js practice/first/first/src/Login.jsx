//ternary 
//ternary with const variable

function Login(props){
    const wel= <h2>welcome {props.name}</h2>
    const log=<h2>Please login</h2>
    return(props.is ? wel:log)
}

export default Login