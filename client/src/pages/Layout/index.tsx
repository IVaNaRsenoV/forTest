//================================< LIBRARIES >================================
import React from 'react';
import { Link } from 'react-router-dom';

//================================< REDUX >================================
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setName } from '../../redux/reducer/getInfoPageReducer';

//================================< MUI >================================
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

//================================< COMPONENTS >================================
import { Input } from '../../components';

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
    const dispatch = useAppDispatch();
    const quantity = useAppSelector(state => state.getReducer.count);

    const setValue = (name: string) => dispatch(setName(name))

    return (
        <AppBar position="static" sx={{ mb: "40px" }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                    <Link to='/products' onClick={() => setValue('products')}><Text text={'Products'}/></Link>
                    <Link to='/basket' onClick={() => setValue('basket')}><Text text={'Basket'}/></Link>
                    <Link to='/quantity' onClick={() => setValue('quantity')}><Text text={'Quantity'}/></Link>
                    <Text text={`${quantity}`}/>
                </div>
                <Input />
            </Container>
        </AppBar>
    )
}