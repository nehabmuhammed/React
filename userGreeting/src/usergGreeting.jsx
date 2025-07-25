import React ,{useState} from "react";

function UserGreeting(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

     const updateName = () => {
        setName("Nehab")
    }
    const updateAge = () => {
        setAge(age + 1)
    }

    return(<>
    
       <p>Name:{name}</p>
       <button onClick={updateName}>set Name</button>
    
        
       <p>Age:{age}</p>
       <button onClick={updateAge}>Increment age</button>
    </>);
}
export default UserGreeting