import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../services/api';

const url = 'http://localhost:3001/'

const postData = createAsyncThunk('toolkit/postData', function () {
    api(url, 'POST', { title: 'title' })
})

export default postData;