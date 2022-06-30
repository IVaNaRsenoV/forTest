//================================< LIBRARIES >================================
import ReactDOM from 'react-dom/client';

//================================< REDUX >================================
import { Provider } from 'react-redux';
import store from './redux/store';

//================================< REACT >================================
import { BrowserRouter } from 'react-router-dom';

//================================< APP >================================
import App from './App';

//================================< STYLE >================================
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
