//================================< LIBRARIES >================================
import React, { useState } from 'react'

//================================< SERVICES >================================
import { addItem } from '../../services';

//================================< TYPES >================================
import Data from './type';

//================================< MUI >================================
import Grid from '@mui/material/Grid';

//================================< COMPONENTS >================================
import { ModalWindow }from '../Modal';

import { CardComponent } from '../Card';

  
  export const CardProduct: React.FC<Data> = ({ cost, title, img }) => {
    const [ toggle, setToggle ] = useState<boolean>(false);
    
    const toggleFlag = (bool: boolean) => {
      setToggle(bool)
    }

    return (
        <Grid item xs={12} md={3} sx={{ maxWidth: '25%' }}>
        <CardComponent
            func={addItem}
            text={'add'}
            data={{cost, title, img }}
            toggle={toggleFlag}
          />
          {
            toggle ? <ModalWindow img={img} title={title} cost={cost} toggle={toggleFlag}/> : null
          }
        </Grid>
    )
  }