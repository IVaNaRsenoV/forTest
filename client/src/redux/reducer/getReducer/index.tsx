//================================< LIBRARIES >================================
import { createSlice } from '@reduxjs/toolkit';
import getData from '../../thunk/getData';

//================================< TYPES >================================
import Data from './type';

const initialState: Data = {
    data: []
}

const postReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, () => console.log('pending'))
            .addCase(getData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(getData.rejected, () => console.log('rejected'))
    }
})

export default postReducer.reducer;