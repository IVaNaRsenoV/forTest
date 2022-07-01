//================================< LIBRARIES >================================
import React from 'react'

//================================< HOOKS >================================
import { useAppDispatch } from '../../redux/hooks';

//================================< TYPES >================================
import Data from './type';

export const Card: React.FC<Data> = ({ data, func, text }) => {

    const dispatch = useAppDispatch();
    const { img, title, cost } = data;
  
    return (
      <div>
        <img src={img} alt='default img' />
        <h3>{title}</h3>
        <h3>{cost}</h3>
        <button onClick={() => func(dispatch, data)}>{text}</button>
      </div>
    )
  }