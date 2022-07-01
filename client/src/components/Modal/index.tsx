//================================< LIBRARIES >================================
import React from 'react';

//================================< TYPES >================================
import Data from './type';

export const ModalWindow: React.FC<Data> = ({img, title, cost, toggle})=> {
    return (
      <div>
        <img src={img} alt='default'/>
        <h3>{title}</h3>
        <h3>{cost}</h3>
        <button onClick={() => toggle(false)}>close</button>
      </div>
    )
  }