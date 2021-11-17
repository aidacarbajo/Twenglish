import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../config/MainNavigator';

class Navigators extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer screenOptions={{headerShown: false}}>
        <MainNavigator />
      </NavigationContainer>
    )
  }
 
}

export default Navigators;