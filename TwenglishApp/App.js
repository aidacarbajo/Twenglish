/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import Lecciones from './screens/Lecciones';
import Navigation from './config/Navigation';

import RNBootSplash from "react-native-bootsplash";

const App = () => {
  React.useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return <Navigation />;
};

export default App;