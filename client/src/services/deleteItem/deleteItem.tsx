//================================< THUNK >================================
import deleteData from '../../redux/thunk/deleteData';

//================================< ACTIONS >================================
import { dec } from '../../redux/reducer/getReducer';

//================================< TYPES >================================
import Data from './type';

export const deleteItem = ( dispatch: any, data: Data ) => {
  const { id } = data;
  dispatch(deleteData(id))
  dispatch(dec())
}