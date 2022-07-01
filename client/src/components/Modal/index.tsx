//================================< LIBRARIES >================================
import React from 'react';

//================================< MUI >================================
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

//================================< TYPES >================================
import Data from './type';

export const Modal: React.FC<Data> = ({ toggle, title }) => {
  return (
    <Card sx={{ position: 'absolute',
                bottom: '0px',
                top: '0px',
                right: '0px',
                left: '0px',
                backgroundColor: 'black'
              }}>
      <Typography
        component="h3"
        sx={{ color: "white" }}
      >
        {title}
      </Typography>
       <Button variant="text"
         size="small"
         onClick={() => toggle(false)}
       >
         close
       </Button>
    </Card>
  )
}