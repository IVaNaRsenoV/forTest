//================================< LIBRARIES >================================
import { createSlice } from '@reduxjs/toolkit';
import getDataProducts from '../../thunk/getDataProducts';

//================================< TYPES >================================
import Data from './type';

const initialState: Data = {
    data: []
}

const getProductReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataProducts.pending, () => console.log('pending'))
            .addCase(getDataProducts.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(getDataProducts.rejected, () => console.log('rejected'))
    }
})

export default getProductReducer.reducer;