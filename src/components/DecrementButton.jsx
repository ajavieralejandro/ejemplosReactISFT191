const DecrementButton = ({handleClick }) =>{
    console.log("Estoy recibiendo :",handleClick);
    //Bandera para asegurarme lo que estoy recibiendo en click : 
    return(
        
        <button onClick={()=>handleClick()}>Decrementar contador</button>
    );


}

export default DecrementButton; 