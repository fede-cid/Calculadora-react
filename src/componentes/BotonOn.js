import React from "react";
import '../css/botonOn-Off.css';

const BotonOn = (props) => (

    <div className='botonOn-Off' 
    onClick={()=>props.estado(true)}>
        {props.children}
    </div>

)

export default BotonOn