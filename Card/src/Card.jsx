import ProfilePic from '../src/assets/nehab.png.jpg'
function Card(props){
    return(
       <>
        <div className="card"> 
        <img src= {ProfilePic} alt="picture" />
        <h1>Nehab</h1>
        <p>i am a developer</p>
    </div>
    <div className="card"> 
        <img src= {ProfilePic} alt="picture" />
        <h1>{props.name}</h1>
        <p>{props.para}</p>
    </div>
       </>
    );
}

export default Card