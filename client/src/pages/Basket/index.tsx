//================================< LIBRARIES >================================
import React from 'react';

//=================================< SERVICES >=================================
import { deleteItem } from '../../services';

//===================================< NUI >===================================
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//================================< HOOKS >================================
import { useAppSelector } from '../../redux/hooks';

//===============================< COMPONENTS >===============================
import { Card } from '../../components';

//==================================< TYPES >==================================
import BasketType from './type';


export const Basket: React.FC<BasketType> = ({ data }) => {
  const toggle = useAppSelector(state => state.filterReducer.toggle);
  const test = useAppSelector(state => state.filterReducer.data);

    return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          !toggle ? 
          <>
          {
            data.map(({ id, img, title, cost }) => {
              return (
                <Card key={id} data={{ id, img, title, cost }} func={deleteItem} text={'delete'}/>
              )
            })
          }
        </> : (
          <>
          {
            test.map(({ id, img, title, cost }) => {
              return (
                <Card key={id} data={{ id, img, title, cost }} func={deleteItem} text={'delete'}/>
              )
            })
          }
          </>
        )
      }
      </Grid>
    </Container>
    )
  }