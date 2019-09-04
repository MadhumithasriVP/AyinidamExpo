import React, { Component }  from 'react';
import {Alert, Text ,StyleSheet, View} from 'react-native';
import AnimatedInput from 'react-native-animated-input-label';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from 'react-native-gradient-buttons';

class RegisterScreen extends React.Component
{
  constructor(props) 
  {
      super(props);
  }
  onRegister()
  {
    Alert.alert('Message:',`thanks for register`);
  }
  render() {
    return (
      <LinearGradient
              colors={['#003399','#3366FF','#3399FF','#66ccff']}
              style={styles.container}
        >
      <View>
        <Text style={styles.Head1Txt}>REGISTER</Text>
        <AnimatedInput 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >UserName</AnimatedInput>
        <AnimatedInput 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >Email</AnimatedInput>
        <AnimatedInput
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >PhoneNumber</AnimatedInput>
        <AnimatedInput multiline
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >Address</AnimatedInput>
        <AnimatedInput
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >Landmark</AnimatedInput>  
        <AnimatedInput password
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >Password</AnimatedInput>
        <AnimatedInput password
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >Re-Type Password</AnimatedInput>  
        <Text style={styles.registerlink}>I agree to the terms of user.</Text>
      </View>
      <View style={{ justifyContent: 'center', marginVertical: 16, alignItems: 'center'}}>
             <GradientButton
                   text="SIGN UP"
                   textStyle={{ fontSize: 18 }}
                   gradientBegin="red"
                   gradientEnd="orange"
                   gradientDirection="diagonal"
                   height={48}
                   width={300}
                   radius={15}
                   onPressAction={this.onRegister.bind(this)}
              />
          </View> 
    </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  Head1Txt: {
    fontSize:36,
    color:'#ffffff',
    textAlign:'center',
    paddingBottom:8,
  },
  labelInput: {
    color: '#F08080',
  },
  formInput: {   
    borderBottomWidth: 1.5, 
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#EAE4E2',       
  },
  registerlink:{
	  fontSize:16,
	  paddingTop:20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 0
  },
});

export default RegisterScreen;