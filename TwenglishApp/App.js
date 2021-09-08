/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import Lecciones from './screens/Lecciones';
import NavigationFooter from './config/NavigationFooter';

import RNBootSplash from "react-native-bootsplash";

const App = () => {
  React.useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return <NavigationFooter />;
};

export default App;