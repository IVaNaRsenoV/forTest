import { createSlice } from '@reduxjs/toolkit';
import postData from '../../thunk/postData';

type Data = {
    title: string
}

const initialState: Data = {
    title: 'default value'
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