//================================< LIBRARIES >================================
import React from 'react'

//================================< HOOKS >================================
import { useAppSelector } from '../../redux/hooks';

export const Item: React.FC = () => {
    const item = useAppSelector(state => state.getInfoItemReducer);
  
    return (
      <div>
        <img src={item.img} alt='default'/>
        <h1>{item.title}</h1>
        <h1>cost {item.cost}</h1>
      </div>
    )
  }