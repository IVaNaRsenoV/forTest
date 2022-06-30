import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../../services/query/api';

const url = 'http://localhost:3001/basket';

const getDataBasket = createAsyncThunk('toolkit/getData', function () {
    const data = api(url, 'GET');
    return data;
})

export default getDataBasket;