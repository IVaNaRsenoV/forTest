import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './postReducer';
import getReducer from './getReducer';
import deleteReducer from './deleteReducer';
import getProductReducer from './getProductReducer';

const reducer = combineReducers({
    postReducer,
    getReducer,
    deleteReducer,
    getProductReducer
});

export default reducer;