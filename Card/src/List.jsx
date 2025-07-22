
function List(props){

   
                    // fruits.sort((a , b )=> b.name.localeCompare(a.name) );
                    // fruits.sort((a , b )=> b.calories - a.calories );

                    const listItem = props.items;
                    const category = props.category;

    const listItems = listItem.map(fruit =>
     <li key = {fruit.id}>{fruit.name} &nbsp;<b> {fruit.calories}</b>
     </li> )

    return(
            <>
                <h1 className="list-category">{category}</h1>
                <ol className="list-item">{listItems}</ol>
            </>
        );

}
export default List