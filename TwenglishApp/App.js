/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./config/MainNavigator";

import RNBootSplash from "react-native-bootsplash";

const App = () => {
  React.useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
      <NavigationContainer screenOptions={{headerShown: false}}>
        <MainNavigator />
      </NavigationContainer>
  );
};

export default App;