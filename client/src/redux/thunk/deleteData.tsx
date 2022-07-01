import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../../services/query/api';

const url = 'http://localhost:3001/basket/';

const getData = createAsyncThunk('toolkit/getData', function (data: number) {
    api(url + `${data}`, 'DELETE');
    const newData = api(url, 'GET');
    return newData;
})

export default getData;