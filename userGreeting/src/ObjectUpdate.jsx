import React, {useState} from "react";

   

function ObjectUpdate(){
     const [car,setcar] = useState({year:2020,
                                    make:"Ford",
                                    model:"mustang"
    })

    function handleChangeYear(event){
        setcar(car => ({...car, year: event.target.value}))
    }
     function handleChangeMake(event){
        setcar(car => ({...car, make: event.target.value}))
    }
     function handleChangeModel(event){
        setcar(car => ({...car, model: event.target.value}))
    }

    return(<>
        <p>Car Year: {car.year} and Manuacuterd by {car.make} and model name is {car.model}</p>
        <input type="number" value={car.year} onChange={handleChangeYear} /><br />
        <input type="text" value={car.make} onChange={handleChangeMake} /><br />
        <input type="text" value={car.model} onChange={handleChangeModel} />
    </>);
}
export default ObjectUpdate