import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Loading from './activities/Loading';
import LoginScreen from './activities/LoginScreen';
import RegisterScreen from './activities/RegisterScreen';
import HotelHome from './activities/HotelHome';
import MapHotel from './activities/MapHotel';
import MapOrphanage from './activities/MapOrphanage';
import VehicleDetails from './activities/VehicleDetails';
import OrphanageHome from './activities/OrphanageHome';
import OrphanRequest from './activities/OrphanRequest';
import FunctionHome from './activities/FunctionHome';
import AcceptDeny from './activities/AcceptDeny';
import validation from './activities/registerValidation';
import validate from './activities/validation_wrapper';

import LookOrphanages from './activities/LookOrphanages';
import FbOrpRetrieval from './activities/FbOrpRetrieval';
import FoodDonatePage from './activities/FoodDonatePage';
import FbHotelRetrieval from './activities/FbHotelRetrieval';
import LookHotels from './activities/LookHotels';
import FoodRequestPage from './activities/FoodRequestPage';
import Dummy from './activities/Dummy';
import ADOrphSide from './activities/ADOrphSide';
import AcceptDenyOrpReq from './activities/AcceptDenyOrpReq';
import DummyTwo from './activities/DummyTwo';

const NavigationStack = createStackNavigator(
{
  Loading: {screen: Loading },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  HotelHome: { screen: HotelHome },
  OrphanageHome: { screen: OrphanageHome},
  MapHotel: { screen: MapHotel },
  MapOrphanage: { screen: MapOrphanage },
  VehicleDet: { screen: VehicleDetails},
  OrphanReq: { screen: OrphanRequest},
  AcceptDeny: {screen: AcceptDeny},
  FunctionHome: {screen: FunctionHome},

  ADOrphSide: {screen: ADOrphSide},
  AcceptDenyOrpReq: {screen: AcceptDenyOrpReq},
  Dummy:{screen:Dummy},
  LookHotels: {screen: LookHotels},
  FbHotelRetrieval:{screen: FbHotelRetrieval},
  LookOrphanages: { screen: LookOrphanages},
  FbOrpRetrieval: { screen: FbOrpRetrieval},
  FoodDonatePage: { screen: FoodDonatePage},
  FoodRequestPage: {screen: FoodRequestPage},
  DummyTwo: {screen: DummyTwo},
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
