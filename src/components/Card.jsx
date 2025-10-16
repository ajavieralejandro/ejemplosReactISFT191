const Card = ({click }) =>{
    //Bandera para asegurarme lo que estoy recibiendo en click : 
    console.log("Estoy recibiendo : ",click);
    return(
        
        <h1 className="text-3xl font-bold  hover:underline ">Me hiciste click :{click}</h1>
    );
}
export default Card; 