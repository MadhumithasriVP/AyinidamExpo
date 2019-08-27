import React, { Component }  from 'react';
import {Text ,StyleSheet, View} from 'react-native';

class RegisterScreen extends React.Component
{
  constructor() 
  {
      super()
  }
  render()
  {
    return(
      <View style={styles.container}>
       <Text style={styles.ActNmeTxt}>Register</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // margin:30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#49A0F9',
  },
  ActNmeTxt: {
    fontSize:35,
    color:'#ffffff',
    textAlign:'center',
  }
});

export default RegisterScreen;