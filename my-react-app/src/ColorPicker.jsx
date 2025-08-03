import React,{useState} from "react";

function ColorPicker(){
    const[color,setColor] = useState("fffffff");
    function changeColor(event){
        setColor(event.target.value)
    }
    return(
        <>
        <div>
            <h1>Color Picker</h1>
        </div>
        <div className="color" style={{backgroundColor:color}}>
            <p>Selected Color:{color}</p>
             <div className="color-display">
            <label htmlFor="">Pick Your Color</label>
            <input type="color" value={color} onChange={changeColor}/>
        </div>
        </div>
        
        </>
    );
}
export default ColorPicker