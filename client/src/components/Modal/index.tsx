//================================< LIBRARIES >================================
import React from 'react';

//================================< MUI >================================
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

//================================< TYPES >================================
import Data from './type';

export const ModalWindow: React.FC<Data> = ({img, title, cost, toggle})=> {
    return (
      <Card sx={{ maxWidth: 345, m: '10px', p: '10px' }}>
        <img src={img} alt='default'/>
        <h3>{title}</h3>
        <h3>{cost}</h3>
        <Button
          variant="text"
          size="small"
          onClick={() => toggle(false)}
        >
          close
        </Button>
      </Card>
    )
  }