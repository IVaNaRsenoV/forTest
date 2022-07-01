//================================< LIBRARIES >================================
import React from 'react';

//=================================< SERVICES >=================================
import { deleteItem } from '../../services';

//===================================< NUI >===================================
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//===============================< COMPONENTS >===============================
import { Card } from '../../components';

//==================================< TYPES >==================================
import BasketType from './type';


export const Basket: React.FC<BasketType> = ({ data }) => {
    return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          data.length > 0 ? 
          <>
          {
            data.map(({ id, img, title, cost }) => {
              return (
                <Card key={id} data={{ id, img, title, cost }} func={deleteItem} text={'delete'}/>
              )
            })
          }
        </> : null    
      }
      </Grid>
    </Container>
    )
  }