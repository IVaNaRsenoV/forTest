import React from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router-dom';

import { filter, toggle } from '../../redux/reducer/filterReducer';

import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const StyledInputElement = styled('input')(() => {
    return `
    width: 350px;
    height: 30px;
    border-radius: 5px;
    font-size: 16px;
    padding: 6px;
    outline: none;
    font-weight: bold;
  `
},
  );

export const Input: React.FC = () => {

    const name = useAppSelector(state => state.getInfoPageReducer.namePage);

    const dispatch = useAppDispatch();
    const searchData = useAppSelector(state => state.getProductReducer.data);
    const basketData = useAppSelector(state => state.getReducer.data);
    const [ value, setValue ] = React.useState<string>('');
  
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <InputUnstyled components={{ Input: StyledInputElement }}
                            value={value}
                            onBlur={() => {
                              setValue('');
                              dispatch(toggle(false))
                            }}
                            onChange={(e) => {
                            console.log(name);
                            if (name === 'products') {
                              dispatch(filter(searchData.filter(el => el.title.includes(e.target.value))));
                            } else if (name === 'basket') {
                              dispatch(filter(basketData.filter(el => el.title.includes(e.target.value))));
                            }
                            setValue(e.target.value);
                            dispatch(toggle(true));
                                if (e.target.value === '' ) {
                                dispatch(toggle(false));
                                }
                            }}/>
        </div>
  )
}
