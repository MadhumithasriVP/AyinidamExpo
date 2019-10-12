import React, { Component }  from 'react';
import {Alert, Text ,StyleSheet, View, Keyboard, ScrollView} from 'react-native';
import AnimatedInput from 'react-native-animated-input-label';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from 'react-native-gradient-buttons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { Checkbox } from 'react-native-paper';
import Firebase, {db} from '../config/Firebase';

const usertype = [
  {
    label: 'Hotel',
    value: 'Hotel',
  },
  {
    label: 'Orphanage',
    value: 'Orphanage',
  },
  {
    label: 'Function Hall',
    value: 'Function Hall',
  },
]

let addItem = (userType, usrnme, email, address, phnno, lm, pass, retype) => {
  db.ref('/users').push({
    firstSeenVal: userType,
    username: usrnme,
    email: email,
    address: address,
    phonenum: phnno,
    landmark: lm,
    pass: pass,
    retype: retype,
  });
};

class RegisterScreen extends React.Component
{
  constructor(props) 
  {
      super(props);
      this.state = { 
           username: '',
           email:'',
           address:'',
           phonenum:'',
           landmark:'',
           pass:'',
           retype:'',
           firstSeenVal: undefined,
           errorMessage: null,
      };
  }
  handleSignUp = () => {
        const { email, pass } = this.state
        addItem(this.state.firstSeenVal, this.state.username, this.state.email, this.state.address, this.state.phonenum, this.state.landmark, this.state.pass, this.state.retype);
        Alert.alert('Message:',`${email}, Registration successful.`);
        Firebase.auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => console.log(error))
    }

  myfunc=()=>{
    if(username == ""){
      this.setState({errorMessage:'Please fill the user name'});
    }
    else if(email == ""){
      this.setState({errorMessage:'Please fill the email'});
    }
    else if(address == ""){
      this.setState({errorMessage:'Please fill the address'});
    }
    else if(phonenum == ""){
      this.setState({errorMessage:'Please fill the phone number'});
    }
    else if(pass == ""){
      this.setState({errorMessage:'Please fill the password'});
    }
    else if(retype == ""){
      this.setState({errorMessage:'Please fill the re-type password'});
    }
    else {
      this.setState({errorMessage:'Thank you !'})
    }
    Keyboard.dismiss();
      }
  static navigationOptions=
  {
    title:'Register Activity',
    headerStyle:{backgroundColor:'#003399'},
    headerTintColor: '#fff',
    headerTitleStyle: {
           fontWeight: '500',
           fontSize: 25,
           color: '#F08080',
                      },
  }
  // onRegister()
  // {
  //   const{username} =this.state;
  //   Alert.alert('Message:',`${username}, thanks for the registration.`);
  // }
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
      <ScrollView>
      <View>
        <Text style={styles.Head1Txt}>REGISTER</Text>
        <Text style={{color:'white',textAlign:'center'}}>
              {/* {this.state.errorMessage} */}
        </Text>      
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
            onChangeText={(username) => this.setState({ username })}
          >UserName</AnimatedInput>
        <AnimatedInput 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(email) => this.setState({ email })}
            //autoCompleteType=email
            keyboardType="email-address"
          >Email</AnimatedInput>
        <AnimatedInput
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(phonenum) => this.setState({ phonenum })}
          >PhoneNumber</AnimatedInput>
        <AnimatedInput multiline
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(address) => this.setState({ address })}
          >Address</AnimatedInput>
        <AnimatedInput
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(landmark) => this.setState({ landmark })}
          >Landmark</AnimatedInput>  
        <AnimatedInput password
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(pass) => this.setState({ pass })}
          >Password</AnimatedInput>
        <AnimatedInput password
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(retype) => this.setState({ retype })}
          >Re-Type Password</AnimatedInput>  
        {/* <Text style={styles.registerlink}>I agree to the terms of user.</Text> */}
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
                   //onPressAction={this.onRegister.bind(this)}
                   //onPressAction={this.myfunc}
                   onPressAction= {this.handleSignUp}
              />
          </View> 
          </ScrollView>
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