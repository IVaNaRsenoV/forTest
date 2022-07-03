import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Str = {
    namePage: string
};

const initialState: Str = {
    namePage: 'default'
};

const getInfoPageReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        setName (state, action: PayloadAction<string>) {
            state.namePage = action.payload;
        }
    }
});

export default getInfoPageReducer.reducer;
export const { setName } = getInfoPageReducer.actions;