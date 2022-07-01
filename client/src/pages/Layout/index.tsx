//================================< LIBRARIES >================================
import React from 'react';
import { Link } from 'react-router-dom';

//================================< REDUX >================================
import { useAppSelector } from '../../redux/hooks';

//================================< MUI >================================
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface TextType {
    text: string
}

const Text: React.FC<TextType> = ({ text }) => {
    return (
        <Typography
            variant="h6"
            component="h3"
            sx={{
                color: "white",
                p: "10px"
            }}
          >
            {text}
          </Typography>
    )
}

export const Layout: React.FC = () => {
    const quantity = useAppSelector(state => state.getReducer.count);
    return (
        <AppBar position="static" sx={{ mb: "40px" }}>
            <Container sx={{ display: 'flex' }}>
                <Link to='/products'><Text text={'Products'}/></Link>
                <Link to='/basket'><Text text={'Basket'}/></Link>
                <Link to='/quantity'><Text text={'Quantity'}/></Link>
                <Text text={`${quantity}`}/>
            </Container>
        </AppBar>
    )
}