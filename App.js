import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Loading from './activities/Loading';
import LoginScreen from './activities/LoginScreen';
import RegisterScreen from './activities/RegisterScreen';
import HotelHome from './activities/HotelHome';
import Map from './activities/Map';
import VehicleDetails from './activities/VehicleDetails';
import OrphanRequest from './activities/OrphanRequest';
import AcceptDeny from './activities/AcceptDeny';

const NavigationStack = createStackNavigator(
{
  Loading: {screen: Loading },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  HotelHome: { screen: HotelHome },
  Map: { screen: Map },
  VehicleDet: { screen: VehicleDetails},
  OrphanReq: { screen: OrphanRequest},
  AcceptDeny: {screen: AcceptDeny},
},
{
  initialRouteName: 'Loading',
});

const NavigationContainer = createAppContainer(NavigationStack);

export default class App extends React.Component{
  render(){
    return <NavigationContainer/>;
  }
}
