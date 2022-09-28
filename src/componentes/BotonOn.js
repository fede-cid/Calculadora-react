import React from "react";
import '../css/botonOn-Off.css';
import { useEffect } from 'react';

function BotonOn  (props) {
    useEffect(()=> {alert(`Modalidad de uso:
    * Presionar ON para encender la calculadora.
    * Utilizar clear para reinicar la pantalla.
    * Realizar un solo click para bloquear el teclado y dos para apagar.`)},[])
return (
    <div className='botonOn-Off' 
    onClick={()=>props.estado(true)}>
        {props.children}
    </div>
);

}

export default BotonOn