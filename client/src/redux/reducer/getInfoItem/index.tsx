//================================< LIBRARIES >================================
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
    title: string;
    cost: number;
    img: string;
} = {
    title: '',
    cost: 0,
    img: ''
};

const getInfoItemReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        getInfo (state, action: PayloadAction<{ 
            title: string;
            cost: number;
            img: string;
         }>) {
            const { title, cost, img } = action.payload;
            state.title = title;
            state.cost = cost;
            state.img = img;
         }
    }
});

export default getInfoItemReducer.reducer;
export const { getInfo } = getInfoItemReducer.actions;