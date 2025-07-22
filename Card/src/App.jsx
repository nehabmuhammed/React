import List from './List'

function App() {

   const fruits = [{id : 1, name :"Apple" ,calories: 55},
                    {id : 2, name :"Orange" ,calories: 75},
                    {id : 3, name :"Banana" ,calories: 177},
                    {id : 4, name :"PineApple" ,calories: 35},
                    {id : 5, name :"Mango" ,calories: 25}];
    const vegetables = [{id : 6, name :"Cucumber" ,calories: 35},
                    {id : 7, name :"Carrot" ,calories: 45},
                    {id : 8, name :"Beetroot" ,calories: 177},
                    {id : 9, name :"cabage" ,calories: 35},
                    {id : 10, name :"Pumpkin" ,calories: 25}];

  return (
    
    <>
      <List items = {fruits} category = "Fruits"/>
      <List items = {vegetables} category = "vegetables"/>
    </>
  )
}

export default App
