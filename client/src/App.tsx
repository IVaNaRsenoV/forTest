//================================< LIBRARIES >================================
import React from 'react';

//================================< HOOKS >================================
import { useAppDispatch, useAppSelector } from './redux/hooks';

//================================< THUNK >================================
import getData from './redux/thunk/getData';

//================================< PAGES >================================
import { Products, Basket } from './pages';

//================================< STYLE >================================
import './App.css';


function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.getReducer.data);

  React.useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  
  return (
    <div>
      <Products/>
      <Basket data={data}/>
    </div>
  );
}

export default App;
