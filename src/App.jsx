import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import CountButton from './components/CountButton'
import DecrementButton from './components/DecrementButton'
import Navbar from './components/Navbar'
import './App.css'
import AddIcon from './components/AddIcon'

function App() {
  const [timer,setTimer]= useState(0);
  const [count, setCount] = useState(0);
    useEffect(() => {
     console.log("inicializando componente");
    
  }, []);
/*
  useEffect(() => {
 const id = setInterval(() => setTimer(timer+1), 1000);
 return () => clearInterval(id); // limpieza al desmontar o al cambiar deps
}, [timer]);*/

    useEffect(() => {
     console.log("Estoy cambiando el valor de la variable contador");
    //setCount(count+1);
  }, [count]);
  
  const handleClick = () =>{
    setCount(count+1);
  }

   const decrementar = () =>{
    setCount(count-1);
  }

  

  return (
    <>
          <Navbar/>
          <div className="flex items-center justify-center  ">
            <div className='content-start'>
 <div className="shadow-2xl w-25 flex items-center justify-center ">
                      <img class="size-24 object-center  " src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" />

          </div>
          <div className="w-25"> 
                              <h1>Hola ahora hay cambios es : Pedro</h1>
    
          </div>
            </div>
         
          </div>
          <div class="flex items-center justify-center">

      <CountButton handleClick={handleClick} text="incrementar">
                  <AddIcon />

        </CountButton>
      <CountButton handleClick={decrementar} text="decrementar" AddIcon={AddIcon}/>

      <Card nombre="Javier" click={count} />
        </div>
    </>
  )
}

export default App
