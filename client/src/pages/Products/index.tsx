//================================< LIBRARIES >================================
import React, { useEffect } from 'react'

//================================< HOOKS >================================
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

//================================< THUNK >================================
import getDataProducts from '../../redux/thunk/getDataProducts';

//================================< NUI >================================
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//================================< COMPONENTS >================================
import { CardProduct } from '../../components';

type Data = {
  id: number
  title: string
  cost: number
  img: string
}

interface Obj {
  data: Data[]
}

type BasketType = {
  data: Obj;
}

export const Products: React.FC<BasketType> = ({ data }) => {
  const dispatch = useAppDispatch();
  const dataStart = useAppSelector(state => state.getProductReducer.data);
  const toggle = useAppSelector(state => state.filterReducer.toggle);

  const test = useAppSelector(state => state.filterReducer.data);

  useEffect(() =>{
    dispatch(getDataProducts());
  }, [dispatch])

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {
        !toggle ? (
        <>
        {
          dataStart.map(({ id, cost, title, img}) => {
            return (
              <CardProduct key={id} cost={cost} title={title} img={img}/>
            )
          })
        }
        </>
        ) : (
          test.map(({ id, cost, title, img}) => {
            return (
              <CardProduct key={id} cost={cost} title={title} img={img}/>
            )
          })
        )
      }
      </Grid>
    </Container>
  )
}
