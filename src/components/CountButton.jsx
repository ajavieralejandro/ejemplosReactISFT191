const CountButton = ({handleClick,text,AddIcon,children}) =>{
    console.log("Estoy recibiendo :",children);
    //Bandera para asegurarme lo que estoy recibiendo en click : 
    return(
        
        
  <div class="m-3">
    <button onClick={()=>handleClick()} className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
      <span class="mr-2">{text}</span>
 {children}

    </button>
  </div>
  
    );


}

export default CountButton; 