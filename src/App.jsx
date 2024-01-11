import React from 'react';
import Data from './Data';
import { Provider } from 'react-redux';
import { myStore } from './Redux/store';
import './App.css';

const App = () => (
  <>
    <Provider store={myStore}>
      <Data />
    </Provider>
  </>
);

export default App;
