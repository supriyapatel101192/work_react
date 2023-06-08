import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppBase from './components/app-base/app-base.component';
import store from './store/store';
import 'reactstrap';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppBase />
    </BrowserRouter>
  </Provider>
);

export default App;
