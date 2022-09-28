import React from "react";
import '../css/botonOn-Off.css';

const BotonOff = (props) => (
    <div className='botonOn-Off' 
    onClick={()=>props.estado(false)} onDoubleClick={props.manejarClear}>
        {props.children}
    </div>

)

export default BotonOff