import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Data from './type';

const initialState: Data = {
    data: [],
    toggle: false,
};

const filterReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        filter: (state, action: PayloadAction<{
            title: string;
            cost: number;
            img: string;
            id: number;
        }[]>) => {
            state.data = action.payload;
        },
        toggle: (state, action: PayloadAction<boolean>) => {
            state.toggle = action.payload;
        }
    }
});

export default filterReducer.reducer;
export const { filter, toggle } = filterReducer.actions;