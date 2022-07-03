//================================< LIBRARIES >================================
import React from 'react'
import { Link } from 'react-router-dom';

//================================< HOOKS >================================
import { useAppDispatch } from '../../redux/hooks';

//================================< MUI >================================
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//================================< TYPES >================================
import Data from './type';
import { Modal } from '../Modal';

import { getInfo } from '../../redux/reducer/getInfoItem';

export const CardComponent: React.FC<Data> = ({ data, func, text }) => {

    const [ test, setTest ] = React.useState<boolean>(false);

    const dispatch = useAppDispatch();
    const { img, title, cost } = data;
  
    return (
      // <Grid item xs={12} md={3} sx={{ maxWidth: '25%' }}>
        <Card sx={{ height: "100%", position: "relative" }}>
          <Link to='/item'>
            <CardMedia
              sx={{ width: '60%', m: '0 auto', cursor: 'pointer' }}
              component="img"
              image={img}
              alt="product"
              onClick={() => dispatch(getInfo({ img, title, cost }))}
            />
          </Link>

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
      // </Grid>
    )
  }