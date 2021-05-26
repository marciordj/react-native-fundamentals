import React, {Fragment} from 'react';
import { StatusBar } from 'react-native';

import Home from './src/screens/Home';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle='light-content' />
      <Home />
    </Fragment>
  );
};


export default App;
