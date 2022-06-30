//================================< LIBRARIES >================================
import React from 'react';

//================================< HOOKS >================================
import { useAppDispatch } from '../../redux/hooks';

//================================< THUNK >================================
import deleteData from '../../redux/thunk/deleteData';

//================================< TYPES >================================
import BasketType from './type';


export const Basket: React.FC<BasketType> = ({ data }) => {
    const dispatch = useAppDispatch();

    return (
    <>
      {
        data.length > 0 ? 
        <>
        {
          data.map(el => {
            return (
              <div key={el.id}>
                  <h3>{el.title}</h3>
                  <h3>{el.cost}</h3>
                  <img src={el.img} alt='default img' />
                  <button onClick={() => {
                    dispatch(deleteData(el.id))
                  }}>delete </button>
              </div>
            )
          })
        }
        </> : null    
      }
    </>
    )
  }