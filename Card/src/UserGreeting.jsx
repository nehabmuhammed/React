
function UserGreeting(props){
  return(props.isLoggedIn ? <h1>Hello {props.userName}</h1> : <h1>Welcome Guest</h1>);
}

export default UserGreeting