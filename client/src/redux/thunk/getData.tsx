import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../services/api';

const url = 'http://localhost:3001/basket';

const getData = createAsyncThunk('toolkit/getData', function () {
    const data = api(url, 'GET');
    return data;
})

export default getData;