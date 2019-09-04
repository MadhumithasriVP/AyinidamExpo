import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './activities/LoginScreen';
import RegisterScreen from './activities/RegisterScreen';

const NavigationStack = createStackNavigator(
{
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
});

const NavigationContainer = createAppContainer(NavigationStack);

export default class App extends React.Component{
  render(){
    return <NavigationContainer/>;
  }
}
