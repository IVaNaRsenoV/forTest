import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './postReducer';
import getReducer from './getReducer';
import deleteReducer from './deleteReducer';

const reducer = combineReducers({
    postReducer,
    getReducer,
    deleteReducer
});

export default reducer;