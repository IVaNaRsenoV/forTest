//================================< LIBRARIES >================================
import { createSlice } from '@reduxjs/toolkit';
import getData from '../../thunk/getDataBasket';

//================================< TYPES >================================
import Data from './type';

const initialState: Data = {
    data: [],
    count: 0
}

const postReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        inc: (state) => {
            state.count = state.count + 1
        },
        dec: (state) => {
            state.count = state.count - 1
        }
    },
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
export const { inc, dec } = postReducer.actions;