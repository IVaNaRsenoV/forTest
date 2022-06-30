//================================< LIBRARIES >================================
import React from 'react';

//================================< HOOKS >================================
import { useAppDispatch } from '../../redux/hooks';

//================================< THUNK >================================
import deleteData from '../../redux/thunk/deleteData';

type Data = {
    id: number
    title: string
  }

type BasketType = {
    data: Data[]
}

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