import React from 'react';

const Modo_uso = ({setModaluso}) => {
    return (
        <div className='padre'>
            <ol className='hijo'>
                <li>En cada casilla se debe ingresar datos menos en las casillas que están desabilitadas, porque en ellas llegan los datos instantaneos.</li>
                <li>Para poder imprimir debes ingresar todos los datos</li>
                <li>despues del punto (.) solo son decimales</li>
                <li>Sino sabes la proporcion  dar click en tabla dosificacion, allí encontraras la tablas con cantidades a usar ejemplo concreto 1:2:3, trae una proporcion de 350 kilos de cemento esos kilos debes ingresarlos donde dice cemento, lo mismo con lo demas arena,grava etc.</li>
                <span><i onClick={()=>setModaluso(false)} class='bx bxs-x-circle bx-flashing'></i></span>
                </ol>
            <img className='hijo' src="/img/tablaUso.png" alt="img" />
            <img className='hijo' src="img/tablaUsoTabla.png" alt="img" />
            <img className='hijo' src="img/tablaUsoImprimir.png" alt="img" />
        </div>
    );
};

export default Modo_uso;