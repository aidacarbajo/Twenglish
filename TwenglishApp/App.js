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

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';

  React.useEffect(() => {
    RNBootSplash.show({ fade: true }); // immediate
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

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