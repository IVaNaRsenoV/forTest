//================================< THUNK >================================
import deleteData from '../../redux/thunk/deleteData';

//================================< ACTIONS >================================
import { dec } from '../../redux/reducer/getReducer';

interface Data {
  img: string;
  title: string;
  cost: number;
  id: number;
}

export const deleteItem = (dispatch: any, data: Data) => {
  const { id } = data;
  dispatch(deleteData(id))
  dispatch(dec())
}