import React from "react";
import '../css/botonOn-Off.css';

const BotonOff = (props) => {
    const apagar = () => {
        props.estado(false)
        props.manejarClear()
    }
    return (
    <div className='botonOn-Off' 
    onClick={apagar} >
        {props.children}
    </div>
    )
}

export default BotonOff