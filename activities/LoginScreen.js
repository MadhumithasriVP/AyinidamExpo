import React, { Component }  from 'react';
import { Alert, TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
//StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily);
import GradientButton from 'react-native-gradient-buttons';
import { AppLoading } from 'expo';
import AnimatedInput from 'react-native-animated-input-label';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

class LoginScreen extends React.Component{
  constructor(props){
      super(props);
      this.state = {
           //isReady: false,
           username: '',
           password: '',
      };
  }
  // async componentDidMount(){
     //   await Font.loadAsync({
       //    'Poppins-Medium' : require('../assets/fonts/Poppins-Medium.ttf'),
                          //  });
      //  this.setState({isReady: true});
  // }
  static navigationOptions=
  {
    //title:'Ayinidam Login',
    //headerTitleStyle: {
       //    fontWeight: '500',
         //  fontSize: 25,
                      //},
  }
  OpenRegisterActivityFunction = () =>
  {
    this.props.navigation.navigate('Register');
  }
  onLogin()
  {
    const {username, password } = this.state;
    Alert.alert('Message:',`${username}, thanks for logging in`);
  }
  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });
  render()
  {
    const { ...props } = this.props;
    return(        
        <LinearGradient
              colors={['#003399','#3366FF','#3399FF','#66ccff']}
              style={styles.container}
        >
          <Text style={styles.Head1Txt}>LOGIN</Text>
          <View>               
              <AnimatedInput 
                  {...props}
                  value={this.state.username}
                  onChangeText={(username) => this.setState({ username })}
                  labelStyle={styles.labelInput}
                  inputStyle={styles.input}
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
          </View>

          <View>
             <TouchableOpacity> 
                   <Text 
                      style={styles.forgetpasslink}>
		                  Forget Password ? 
		               </Text>
              </TouchableOpacity>
          </View>
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
    color:'#ffffff',
    textAlign:'center',
    paddingBottom:24,
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

export default LoginScreen;
