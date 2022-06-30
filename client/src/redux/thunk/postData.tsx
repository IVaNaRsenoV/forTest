import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../../services/query/api';

const url = 'http://localhost:3001/basket';

interface Data {
    title: string
    cost: number
    img: string
}

const postData = createAsyncThunk('toolkit/postData', function (data: Data) {
    api(url, 'POST', { title: data.title, cost: data.cost, img: data.img })
})

export default postData;