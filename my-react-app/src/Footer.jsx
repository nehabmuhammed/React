
function Footer(){
    
        const styles = {
            
    backgroundColor: "aqua",
    position: "relative",
    left: "40px",

        }
    return(


        <footer style = {styles}>
            <p >{new Date().getFullYear()} Copyright</p>
        </footer>
    );
}
export default Footer