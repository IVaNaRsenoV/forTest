import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../services/api';

const url = 'http://localhost:3001/basket';

const postData = createAsyncThunk('toolkit/postData', function (data: string) {
    api(url, 'POST', { title: data })
})

export default postData;