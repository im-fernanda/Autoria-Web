// import React from 'react'
// import '.Button.css';
// import {Link} from 'react-router-dom';

// export const Button = ({children, type, onCLick, buttonStyel, buttonSize
// }) => {
//     const checkButtonStyle = STYLES.includes(button)
// }

import React from 'react';

const MeuComponente = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <>

      <button className="btn btn-primary" onClick={handleClick}>
        Clique em Mim
      </button>
    </>
  );
};

export default MeuComponente;
