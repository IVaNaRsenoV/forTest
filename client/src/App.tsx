//================================< LIBRARIES >================================
import React from 'react';
import { Routes, Route, Outlet } from 'react-router';

//================================< HOOKS >================================
import { useAppDispatch, useAppSelector } from './redux/hooks';

//================================< THUNK >================================
import getData from './redux/thunk/getDataBasket';

//================================< PAGES >================================
import { Products, Basket, Layout } from './pages';

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
      <Layout />
      <Routes>
        <Route path='/products' element={<Products />}/>
        <Route path='/basket' element={<Basket data={data} />}/>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
