import React, { Component }  from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const region ={
  latitude:11.0168,
  longitude:76.9558,
  latitudeDelta:0.255,
  longitudeDelta:0.266
}
class MapHotel extends React.Component{
  static navigationOptions=
  {
    header: null,    //Hide navigator top
  }
    render()
    {
  return (
    <MapView style={styles.container}
             region={region}
    />
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapHotel;
