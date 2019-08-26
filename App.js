import React, { Component } from 'react';
import { Alert, TextInput, AppRegistry, Button, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

class LoginScreen extends React.Component{
  static navigationOptions=
  {
    title:'Ayinidam Login',
  };
  OpenRegisterActivityFunction = () =>
  {
    this.props.navigation.navigate('Register');
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  onLogin(){
    const {username, password } = this.state;
    Alert.alert('Message:',`${username}, thanks for logging in`);
  }
  render()
  {
    return(
      <View style={styles.container}>
        <Text style={styles.ActNmeTxt}>LOGIN</Text>
         <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Your Username...'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Your Password...'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button 
          onPress={this.onLogin.bind(this)} 
          title ={'Sign in'}
          style={styles.input}
          />
        <Text style={styles.registerlink}>
		       Already a user? Register.
		    </Text>
      </View>
    );
  }
}

class RegisterScreen extends React.Component
{
  render()
  {
    return(
      <View style={styles.container}>
       <Text style={styles.ActNmeTxt}>Register</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
{
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
},
{
  initialRouteName: 'Login',
  headerMode: 'float',
  headerBackTitleVisible: 'true',
  headerTransitionPreset: 'fade-in-place',
  headerLayoutPreset: 'left',
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{
  render(){
    return <AppContainer/>;
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
  },
  input: {
    width: 300,
    height: 50,
    padding: 12,
    borderWidth: 2,
    borderColor: 'yellow',
    marginBottom: 17,
	  fontSize:20,
  },
  registerlink:{
	  fontSize:16,
	  padding:15,
  }
});
