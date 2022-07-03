//================================< THUNK >================================
import postData from '../../redux/thunk/postData';
import getDataBasket from '../../redux/thunk/getDataBasket';

//================================< ACTIONS >================================
import { inc } from '../../redux/reducer/getReducer';

//================================< TYPES >================================
import Data from './type';

export const addItem = (dispatch: any, data: Data ) => {
    const { img, cost, title } = data;
    dispatch(postData({ title, cost, img }));
    dispatch(getDataBasket());
    dispatch(inc());
}