//================================< LIBRARIES >================================
import { createSlice } from '@reduxjs/toolkit';
import postData from '../../thunk/postData';

//================================< TYPES >================================
import Data from './type';

const initialState: Data = {
    title: 'default value',
    cost: 0,
    img: 'default img'
}

const postReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postData.pending, () => console.log('pending'))
            .addCase(postData.fulfilled, (state, action) => console.log('fulfilled'))
            .addCase(postData.rejected, () => console.log('rejected'))
    }
})

export default postReducer.reducer;