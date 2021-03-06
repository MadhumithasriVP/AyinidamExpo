import React, { Component }  from 'react';
import { Alert, TextInput, TouchableOpacity, Text, View, StyleSheet, KeyboardAvoidingView} from 'react-native';
//StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily);
import GradientButton from 'react-native-gradient-buttons';
import { AppLoading } from 'expo';
import AnimatedInput from 'react-native-animated-input-label';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes'; 
import validation from './registerValidation';
import validate from './validation_wrapper';
// Add the Firebase services that you want to use
import Firebase, {db} from '../config/Firebase';

const usertype = [
  {
    label: 'Hotel',
    value: 'Hotel',
    key: 'Hotel',
  },
  {
    label: 'Orphanage',
    value: 'Orphanage',
    key: 'Orphanage',
  },
  {
    label: 'Function Hall',
    value: 'Function Hall',
    key: 'Function Hall',
  },
];

class LoginScreen extends React.Component{
  constructor(props){
      super(props);
      this.state = {
           //isReady: false,
           loading: false,
           email: '',
           password: '', 
           error: '',
           firstSeenVal: undefined,
           usertypeError: '',
           errorMessage: null,
      };
  }
    onLogin = () => {
        const usertypeError = validate('usertype', this.state.firstSeenVal);
        this.setState({ loading: true});
        this.setState({ usertypeError: usertypeError });
        const { email, password, firstSeenVal } = this.state
        //Alert.alert('Message:',`${email}, thanks for logging in`);
          if(firstSeenVal== "Hotel")
          {
            Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('HotelHome'))
            .catch(() => {this.setState({ error: 'Authentication failed, Password or login incorrect', loading: false })})
          }
          if(firstSeenVal== "Orphanage")
          {
           Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('OrphanageHome'))
            .catch(() => {this.setState({ error: 'Authentication failed, Password or login incorrect', loading: false })})
          }
          if(firstSeenVal== "Function Hall")
          {
            Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('FunctionHome'))
            .catch(() => {this.setState({ error: 'Authentication failed, Password or login incorrect', loading: false })})
          }               
    }

  // async componentDidMount(){
     //   await Font.loadAsync({
       //    'Poppins-Medium' : require('../assets/fonts/Poppins-Medium.ttf'),
                          //  });
      //  this.setState({isReady: true});
  // }
  static navigationOptions=
  {
    header: null,    //Hide navigator top
  }
  toForgetPassActivity = () =>
{
  Alert.alert('Message:',`Change password granted.`);
}
  OpenRegisterActivityFunction = () =>
  {
    this.props.navigation.navigate('Register');
  }
  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });
  render()
  {
    const { ...props } = this.props;
    const placeholder = {
      label: 'Select a type...',
      value: null,
      color: '#F08080',
    };
    return(      
      <KeyboardAvoidingView style={styles.container}>
        <LinearGradient
              colors={['#003399','#3366FF','#3399FF','#66ccff']}
              style={styles.container}
        >
          <Text style={styles.Head1Txt}>LOGIN</Text>  
          <View paddingVertical={5} />
            {/* False -useNativeAndroidPickerStyle (default) and iOS onUpArrow/onDownArrow toggle example */}
          <RNPickerSelect
            placeholder={placeholder}
            items={usertype}
            useNativeAndroidPickerStyle={false}
            value={this.state.firstSeenVal}
            underlineColorAndroid="transparent"
            onValueChange={value => {
              this.setState({
                firstSeenVal: value,
              });
            }}
            onBlur={() => {this.setState({usertypeError: validate('usertype', this.state.firstSeenVal)})}}
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
          <View><Text style={styles.errorMsg}>{this.state.usertypeError}</Text></View>
          <View>               
              <AnimatedInput 
                  {...props}
                  value={this.state.email}
                  onChangeText={(email) => this.setState({ email })}
                  labelStyle={styles.labelInput}
                  inputStyle={styles.input}
                  autoCapitalize = "none"
                  keyboardType="email-address"
                  //onBlur={this.handleBlur}
                  style={styles.formInput}
                  underlineColorAndroid="transparent"
              >UserName/Email</AnimatedInput>
              <AnimatedInput 
                  {...props}
                  value={this.state.password}
                  onChangeText={(password) => this.setState({ password })}
                  secureTextEntry={true}
                  labelStyle={styles.labelInput}
                  inputStyle={styles.input}
                  //onBlur={this.handleBlur}
                  style={styles.formInput}
                  underlineColorAndroid="transparent"
              >Password</AnimatedInput>
              <Text style={{color:'white',textAlign:'left',marginLeft:10}}>{this.state.error} </Text>
          </View>

          {/* <View>
             <TouchableOpacity> 
                   <Text 
                      style={styles.forgetpasslink}
                      onPress={this.toForegetPassActivity}>
		                  Forget Password ? 
		               </Text>
              </TouchableOpacity>
          </View> */}
          <View style={{ justifyContent: 'center', marginVertical: 16, alignItems: 'center'}}>
             <GradientButton
                   text="SIGN IN"
                   textStyle={{ fontSize: 18 }}
                   gradientBegin="red"
                   gradientEnd="orange"
                   gradientDirection="diagonal"
                   height={48}
                   width={300}
                   radius={15}
                   onPressAction={this.onLogin.bind(this)}
              />
          </View> 
          <View>
              <TouchableOpacity
                   onPress={this.OpenRegisterActivityFunction}>
                   <Text 
                      style={styles.registerlink}>
		                  Don't have an account ? Register.
		               </Text>
              </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  Head1Txt: {
    fontSize:36,
    fontWeight: 'bold',
    color:'#ffffff',
    textAlign:'center',
    paddingBottom:40,
  },
  errorMsg: {
    color:'white',
    textAlign:'left', 
    marginLeft:10,
  },
  ActNmeTxt: {
    fontSize:35,
    color:'#ffffff',
    textAlign:'center',
    //fontFamily: 'sans-serif',
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
  input: {
    borderWidth: 0
  },
  forgetpasslink:{
	  fontSize:16,
	  paddingTop:3,
    marginRight:10,
    textAlign: 'right',
  },
  registerlink:{
	  fontSize:16,
	  paddingTop:20,
    textAlign: 'center',
    fontWeight: 'bold',
  }
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

export default LoginScreen;