export default function Price({OldPrice , NewPrice }){
    let oldstyles = {
        textDecorationLine:"Line-through",
    }
    let newStyles = {
        fontWeight : "bold",
    }
    let styles = {
        backgroundColor: "green",
        height : "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }
   
    return (
    <>
           <div style={styles}>
         <span style={oldstyles}>{OldPrice}</span>
         &nbsp;&nbsp;&nbsp;
         <span style={newStyles}>{NewPrice}</span>
         </div>
    </>
    );
}
