//================================< LIBRARIES >================================
import React, { useEffect } from 'react'

//================================< HOOKS >================================
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

//================================< THUNK >================================
import getDataProducts from '../../redux/thunk/getDataProducts';

//================================< COMPONENTS >================================
import { CardProduct } from '../../components';

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
            <CardProduct key={id} cost={cost} title={title} img={img}/>
          )
        })
      }
    </>
  )
}
