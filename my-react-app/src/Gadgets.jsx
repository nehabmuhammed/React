 
 
 function Gadgets(){

    const gadget1 = "Mobile";
    const gadget2 = "Laptop";

    return(
        <div>
            <ul>
                <li>Mouse</li>
                <li>{gadget1}</li>
                <li>{gadget2.toUpperCase()}</li>
            </ul>  
        </div>
    );


 }

 export default Gadgets