import React, { Component }  from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class Map extends React.Component{
    render()
    {
  return (
    <MapView style={styles.container}
    />
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
