//================================< LIBRARIES >================================
import React from 'react'

//================================< HOOKS >================================
import { useAppDispatch } from '../../redux/hooks';

//================================< MUI >================================
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//================================< TYPES >================================
import Data from './type';
import { Modal } from '../Modal';


export const CardComponent: React.FC<Data> = ({ data, func, text }) => {

    const [ test, setTest ] = React.useState<boolean>(false);

    const dispatch = useAppDispatch();
    const { img, title, cost } = data;
  
    return (
      <Card sx={{ height: "100%", position: "relative" }}>
        <CardMedia
        sx={{ width: '60%', m: '0 auto'}}
        component="img"
        image={img}
        alt="product"
      />

      <CardContent sx={{ pl: "20%" }}>
        <Typography variant="h6">
          {title}
        </Typography>
        <Typography variant="body1">
          {cost}
        </Typography>
      </CardContent>

        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button
            variant="text"
            size="small"
            onClick={() => func(dispatch, data)}
          >
              {text}
          </Button>
          <Button
            variant="text"
            size="small"
            onClick={() => setTest(true)}
          >
            get info
          </Button>
        </CardActions>
        {
          test ? <Modal toggle={setTest} title={title}/> : null
        }
      </Card>
    )
  }