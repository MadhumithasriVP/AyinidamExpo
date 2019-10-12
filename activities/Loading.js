import  React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Firebase from '../config/Firebase';
export default class Loading extends React.Component {
  static navigationOptions=
  {
    header: null,    //Hide navigator top
  }
  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'HotelHome' : 'Login')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})