/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Lecciones from './screens/Lecciones';

import {
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import RNBootSplash from "react-native-bootsplash";


const App = () => {
  React.useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return <Lecciones />;
};

export default App;