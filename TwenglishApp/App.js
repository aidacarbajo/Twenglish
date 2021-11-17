/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RNBootSplash from "react-native-bootsplash";
import PreTest from './screens/PreTest';
import Navigators from './screens/Navigators';

const App = () => {
  React.useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

    return (
      <Navigators />
  );
};

export default App;