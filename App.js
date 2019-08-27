import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './activities/LoginScreen';
import RegisterScreen from './activities/RegisterScreen';

const LoginStack = createStackNavigator(
{
  Login: { screen: LoginScreen },
});

const RegisterStack = createStackNavigator(
{
  Register: { screen: RegisterScreen },
});

const LoginContainer = createAppContainer(LoginStack);

export default class App extends React.Component{
  render(){
    return <LoginContainer/>;
  }
}


