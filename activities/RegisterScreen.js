import React, { Component }  from 'react';
import {Alert, Text ,StyleSheet, View} from 'react-native';
import AnimatedInput from 'react-native-animated-input-label';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from 'react-native-gradient-buttons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';

const usertype = [
  {
    label: 'Hotel',
    value: 'Hotel',
  },
  {
    label: 'Orphanage',
    value: 'Orphanage',
  },
]

class RegisterScreen extends React.Component
{
  constructor(props) 
  {
      super(props);
      this.state = { 
           firstSeenVal: undefined,
      };
  }
  static navigationOptions=
  {
    title:'Ayinidam',
    headerTitleStyle: {
           fontWeight: '500',
           fontSize: 25,
           color: '#F08080',
                      },
  }
  onRegister()
  {
    Alert.alert('Message:',`thanks for register`);
  }
  render() {
    const placeholder = {
      label: 'Select a type...',
      value: null,
      color: '#F08080',
    };
    return (
      <LinearGradient
              colors={['#003399','#3366FF','#3399FF','#66ccff']}
              style={styles.container}
        >
      <View>
        <Text style={styles.Head1Txt}>REGISTER</Text>
        <View paddingVertical={5} />
            {/* False -useNativeAndroidPickerStyle (default) and iOS onUpArrow/onDownArrow toggle example */}
          <RNPickerSelect
            placeholder={placeholder}
            items={usertype}
            useNativeAndroidPickerStyle={false}
            value={this.state.firstSeenVal}
            onValueChange={value => {
              this.setState({
                firstSeenVal: value,
              });
            }}
            style={{
              ...pickerSelectStyles,
              width: 200,
              iconContainer: {
                top: 20,
                right: 70,
              },
            }}
            //textInputProps={{ underlineColor: 'yellow' }}
            Icon={() => {
              return <Chevron size={2.0} color="#EAE4E2" />;
            }}
          />
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
    fontWeight: 'bold',
    paddingBottom:40,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    alignItems:'center',
    marginLeft:50,
    marginRight:50,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EAE4E2',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 20,
    alignItems:'center',
    marginLeft:50,
    marginRight:50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1.0,
    borderColor: '#EAE4E2',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default RegisterScreen;