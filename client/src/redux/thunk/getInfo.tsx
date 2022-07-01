import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services';

const url = 'http://localhost:3001/products/'

export const getInfo = createAsyncThunk('toolkit/getInfo', function (data: number) {
    api(url + data, 'GET');
})