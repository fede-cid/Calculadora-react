import './App.css';
import BotonOff from './componentes/BotonOff'
import BotonOn from './componentes/BotonOn'
import Boton from './componentes/boton'
import'./componentes/Pantalla'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState, useEffect } from 'react';
import { evaluate} from 'mathjs'

function App() {

  useEffect(()=> {alert(`Modalidad de uso:
  * Presionar ON para encender la calculadora.
  * Utilizar clear para reinicar la pantalla.
  * Realizar un solo click para bloquear el teclado y dos para apagar.`)},[])

  const [input, setInput] = useState('');
  const [onOff, setonOff] = useState(true);

  const agregarInput = val => {
    if(onOff)
    setInput( input + val );  
   
  };

const resul = () =>{ 
  if(input){
  setInput(evaluate(input))
}else {alert('¡por favor! ingrese un valor numérico para realizar su operación / please! enter a numerical value to perform your operation' )}
}
   
  return (
    
    <div className="App">

      <div className='calculadora-logo-contenedor'>
        <h1><strong>CALCULADORA CIENTIFICA</strong><br/></h1>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
        <BotonOn estado={setonOff} >On</BotonOn>
        <BotonOff estado={setonOff} manejarClear={() => setInput('')}>Off</BotonOff>
        <Boton manejarClick={agregarInput}>%</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
        <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div >
        <div className='fila'><Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton></div>
        <div className='fila'><Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton></div>
        <div className='fila'><Boton manejarClick={agregarInput}>1</Boton>
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'><Boton manejarClick={agregarInput}>00</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>,</Boton>
        <Boton manejarClick={resul}>=</Boton></div>
      </div>
    </div>
  );
}

export default App;
