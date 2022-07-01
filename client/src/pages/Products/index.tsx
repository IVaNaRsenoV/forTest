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

export const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.getProductReducer.data);

  useEffect(() =>{
    dispatch(getDataProducts());
  }, [dispatch])

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {
        data.map(({ id, cost, title, img}) => {
          return (
            <CardProduct key={id} cost={cost} title={title} img={img}/>
          )
        })
      }
      </Grid>
    </Container>
  )
}
