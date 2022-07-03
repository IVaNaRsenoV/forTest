import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './postReducer';
import getReducer from './getReducer';
import deleteReducer from './deleteReducer';
import getProductReducer from './getProductReducer';
import getInfoItemReducer from './getInfoItem';
import filterReducer from './filterReducer';
import getInfoPageReducer from './getInfoPageReducer';

const reducer = combineReducers({
    postReducer,
    getReducer,
    deleteReducer,
    getProductReducer,
    getInfoItemReducer,
    filterReducer,
    getInfoPageReducer,
});

export default reducer;