import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../services/api';

const url = 'http://localhost:3001/products';

const getDataProducts = createAsyncThunk('toolkit/getDataProducts', function () {
    const data = api(url, 'GET');
    return data;
})

export default getDataProducts;