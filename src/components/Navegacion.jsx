import React, { useState } from 'react';

const Navegacion = ({ Amburguesa,optionsChange, dark, openTable, tableUso, modeDark }) => {
    const [btnChange, setBtnChange] = useState(false);
  
    const OptionButton = () => {
        setBtnChange(!btnChange);
    }
    return (
     
       
        <ul className='home__navBar' >
            <li onClick={tableUso}>Modo de uso.</li>
            <li onClick={() => optionsChange(1)}>Concretos</li>
            <li onClick={() => optionsChange(2)}>Morteros</li>
            <li onClick={() => optionsChange(4)}>varillas</li>
            <li  onClick={OptionButton}>Cielo Rasos
                {btnChange && (
                    <div className='btn__option-selection'>
                        <li onClick={() => optionsChange(3)}>laminas</li>
                        <li onClick={() => optionsChange(5)}>viguetas y más</li>
                    </div>
                )}
            </li>

            <li onClick={openTable} style={{ cursor: 'pointer' }}>tabla dosificaciones</li>
            <li onClick={dark}>{modeDark ? 'Modo Claro' : 'Modo Oscuro'}</li>
            <img className='logo' src="/img/logo.png" alt="logo" />
        </ul>
    
    );
};

export default Navegacion;