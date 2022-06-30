import React from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import postData from './redux/thunk/postData';
import getData from './redux/thunk/getData';
import deleteData from './redux/thunk/deleteData';
import './App.css';

type TestA = {
  id: number
  title: string
}

const Test: React.FC<{ data: TestA[]}> = ({ data }) => {
  const dispatch = useAppDispatch();
  // const data = useAppSelector(state => state.getReducer.data);
  return (
  <>
    {
      data.length > 0 ? 
      <>
      {
        data.map(el => {
          return (
            <div key={el.id}>
                <h3>{el.title}</h3>
                <button onClick={() => {
                  dispatch(deleteData(el.id))
                }}>delete </button>
            </div>
          )
        })
      }
      </> : null    
    }
  </>
  )
}


function App() {

  const [ test, setTest ] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.getReducer.data);

  React.useEffect(() => {
    dispatch(getData())
  }, [])
  
  return (
    <div>
      <input type='text' placeholder='send message' onChange={(e) => setTest(e.target.value)}/>
      <button onClick={() => {
        dispatch(postData(test))
        dispatch(getData())
      }}>click</button>
      <Test data={data}/>
    </div>
  );
}

export default App;
