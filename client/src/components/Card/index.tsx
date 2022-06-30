//================================< LIBRARIES >================================
import React from 'react'

//================================< HOOKS >================================
import { useAppDispatch } from '../../redux/hooks';

//================================< THUNK >================================
import postData from '../../redux/thunk/postData';
import getDataBasket from '../../redux/thunk/getDataBasket';

//================================< TYPES >================================
import Data from './type';

  
  export const Card: React.FC<Data> = ({ cost, title, img }) => {
    const dispatch = useAppDispatch();
  
    const requestAction = (title: string) => {
      dispatch(postData({ title, cost, img }))
      dispatch(getDataBasket())
    }
    
    return (
      <div>
          <img src={img} alt='default'/>
          <h3>{title}</h3>
          <p>{cost} ГРН</p>
          <button onClick={() => requestAction(title)}>add to the basket</button>
      </div>
    )
  }