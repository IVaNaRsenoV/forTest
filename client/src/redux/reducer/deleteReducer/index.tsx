import { createSlice } from '@reduxjs/toolkit';
import deleteData from '../../thunk/deleteData';

type Title = {
    title: string
    id: number
}

type Data = {
    data: Title[]
}

const initialState: Data = {
    data: []
}

const postReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteData.pending, () => console.log('pending'))
            .addCase(deleteData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(deleteData.rejected, () => console.log('rejected'))
    }
})

export default postReducer.reducer;