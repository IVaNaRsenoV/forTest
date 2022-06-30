//================================< LIBRARIES >================================
import React, { useEffect } from 'react'

//================================< HOOKS >================================
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

//================================< THUNK >================================
import getDataProducts from '../../redux/thunk/getDataProducts';
import postData from '../../redux/thunk/postData';
import getData from '../../redux/thunk/getData';

export const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.getProductReducer.data);

  useEffect(() =>{
    dispatch(getDataProducts());
  }, [dispatch])

  return (
    <>
      <h1>Products</h1>
      {
        data.map(({ id, cost, title, img}) => {
          return (
            <div key={id}>
              <img src={img} alt='default'/>
              <h3>{title}</h3>
              <p>{cost} ГРН</p>
              <button onClick={() => {
                  dispatch(postData(title))
                  dispatch(getData())
              }}>add to the basket</button>
          </div>
          )
        })
      }
    </>
  )
}
