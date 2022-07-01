//================================< LIBRARIES >================================
import React from 'react'

//================================< SERVICES >================================
import { addItem } from '../../services';

//================================< TYPES >================================
import Data from './type';

//================================< MUI >================================
import Grid from '@mui/material/Grid';

//================================< COMPONENTS >================================
import { CardComponent } from '../Card';

  
  export const CardProduct: React.FC<Data> = ({ cost, title, img }) => {
    return (
        <Grid item xs={12} md={3} sx={{ maxWidth: '25%' }}>
        <CardComponent
            func={addItem}
            text={'add'}
            data={{cost, title, img }}
          />
        </Grid>
    )
  }