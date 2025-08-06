import React,{useState} from "react";

function ArrayUpdate(){

        const[food,setFood] = useState(["Mango","Apple","Orange"]);

        function AddFood(){
            const newFood =document.getElementById("input").value;
            document.getElementById("input").value = "";
            setFood(food =>[...food,newFood])
        }
        function RemoveFood(index){
            setFood(food.filter((_,i) => i!== index ));
        }


    return(<div>
        <h1>Food Items Array</h1>
        <ul>
            {food.map((food,index) =>
            <li key={index} onClick={() =>RemoveFood(index)}>{food}</li>
            )}
        </ul>
        <input type="text" id="input" placeholder="Enter the food Name" />
        <button onClick={AddFood}>Add Food</button>
    </div>);
}
export default ArrayUpdate