import React, { Component }  from 'react';
import {Alert, Text ,StyleSheet, View, Keyboard, ScrollView} from 'react-native';
import AnimatedInput from 'react-native-animated-input-label';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from 'react-native-gradient-buttons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { Checkbox } from 'react-native-paper';
import validation from './registerValidation';
import validate from './validation_wrapper';
import Firebase, {db} from '../config/Firebase';

//var Hotel_id = 0;
let addItemHotel = (userType, orgname, email, address, phnno, lm, pass, retype) => {
  const userId = Firebase.auth().currentUser.uid;
  let hp=  '/Users/Hotels/'+userId;
 //var HotelPush = db.ref('/Users/Hotels').child(Hotel_id++);
 var HotelPush = db.ref(hp);
  HotelPush.set({
    firstSeenVal: userType,
    orgname: orgname,
    email: email,
    address: address,
    phonenum: phnno,
    landmark: lm,
    pass: pass,
    retype: retype,
  });
};

//var Orphanage_id = 0;
let addItemOrphanage = (userType, orgname, email, address, phnno, lm, pass, retype) => {
  const userId = Firebase.auth().currentUser.uid;
  let op= '/Users/Orphanages/'+userId;
   //var OrphanagePush= db.ref('/Users/Orphanages').child(Orphanage_id++);
   var OrphanagePush =db.ref(op);
   OrphanagePush.set({
    firstSeenVal: userType,
    orgname: orgname,
    email: email,
    address: address,
    phonenum: phnno,
    landmark: lm,
    pass: pass,
    retype: retype,
  });
};

//var FunctionHall_id = 0;
let addItemFunctionHall = (userType, orgname, email, address, phnno, lm, pass, retype) => {
  const userId = Firebase.auth().currentUser.uid;
  let fp='/Users/Function Halls/'+userId;
   // var FunctionHallPush = db.ref('/Users/Function Halls').child(FunctionHall_id++);
   var FunctionHallPush = db.ref(fp);
  FunctionHallPush.set({
    firstSeenVal: userType,
    orgname: orgname,
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
           currentUser: null,
           orgname: '',
           orgnameError: '',
           email:'',
           emailError:'',
           address:'',
           addressError:'',
           phonenum:'',
           phonenumError:'',
           landmark:'',
           pass:'',
           passError: '',
           retype:'',
           retypeError:'',
           firstSeenVal: undefined,
           usertypeError: '',
           errorMessage: null,
      };
  }
  validateRetype=() =>{
    const{pass, retype} =this.state
          if(pass != retype)
          {
            this.setState({retypeError:'The passwords didn\'t match.'});
          }
          else
          {
            Keyboard.dismiss();
          }
  }
  handleSignUp = () => {
        const usertypeError = validate('usertype', this.state.firstSeenVal)
        const orgnameError = validate('orgname', this.state.orgname)
        const emailError = validate('email', this.state.email)
        const phonenumError = validate('phone', this.state.phonenum)
        const addressError = validate('address', this.state.address)
        const passError = validate('password', this.state.pass)
        //const retypeError;
        this.setState({
          usertypeError: usertypeError,
          //usernameError: usernameError,
          orgnameError: orgnameError,
          emailError: emailError,
          passError: passError,
          addressError: addressError,
          phonenumError: phonenumError,
          //retypeError: retypeError
        })
        if (!usertypeError && !orgnameError && !emailError && !passError && !addressError && !phonenumError) {
          const { orgname, email, pass, firstSeenVal } = this.state
          
          Firebase.auth()
                        .createUserWithEmailAndPassword(email, pass)
                        .then(() => writeUserData())
                        .catch(error => console.log(error))
          
          writeUserData=()=>
          {
          if(firstSeenVal=="Hotel")
          {
            addItemHotel(this.state.firstSeenVal, this.state.orgname, this.state.email, this.state.address, this.state.phonenum, this.state.landmark, this.state.pass, this.state.retype);
          }
          if (firstSeenVal == "Orphanage")
          {
            addItemOrphanage(this.state.firstSeenVal, this.state.orgname, this.state.email, this.state.address, this.state.phonenum, this.state.landmark, this.state.pass, this.state.retype);
          }
          if (firstSeenVal == "Function Hall")
          {
            addItemFunctionHall(this.state.firstSeenVal, this.state.orgname, this.state.email, this.state.address, this.state.phonenum, this.state.landmark, this.state.pass, this.state.retype);
          }
          Alert.alert('Message:',`${orgname}, you registered successfully.`);
          this.props.navigation.navigate('Login')
          }
        }         
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
  render() {
    let usertype = [
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
        <Text style={styles.errorMsg}>{this.state.usertypeError}</Text>
        <AnimatedInput 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(orgname) => this.setState({ orgname })}
            onBlur={() => {this.setState({orgnameError: validate('orgname', this.state.orgname)})}}
          >Hotel / Orphanage / Function Hall Name</AnimatedInput>
        <Text style={styles.errorMsg}>{this.state.orgnameError}</Text>
        <AnimatedInput 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={value => this.setState({ email: value.trim() })}
            //autoCompleteType=email
            keyboardType="email-address"
            onBlur={() => {this.setState({emailError: validate('email', this.state.email)})}}
          >Email</AnimatedInput>
        <Text style={styles.errorMsg}>{this.state.emailError}</Text>
        <AnimatedInput
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(phonenum) => this.setState({ phonenum })}
            onBlur={() => {this.setState({phonenumError: validate('phone', this.state.phonenum)})}}
          >PhoneNumber</AnimatedInput>
        <Text style={styles.errorMsg}>{this.state.phonenumError}</Text>
        <AnimatedInput multiline
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(address) => this.setState({ address })}
            onBlur={() => {this.setState({addressError: validate('address', this.state.address)})}}
          >Address</AnimatedInput>
        <Text style={styles.errorMsg}>{this.state.addressError}</Text>
        <AnimatedInput
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(landmark) => this.setState({ landmark })}
          >Landmark (optional)</AnimatedInput>  
        <AnimatedInput password
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(pass) => this.setState({ pass })}
            onBlur={() => {this.setState({passError: validate('password', this.state.pass)})}}
          >Password</AnimatedInput>
        <Text style={styles.errorMsg}>{this.state.passError}</Text>
        <AnimatedInput password
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={(retype) => this.setState({ retype })}
            //onBlur={() => {this.setState({retypeError: {this.validateRetype} }) }}
            onBlur={this.validateRetype}
          >Re-Type Password</AnimatedInput>  
        <Text style={styles.errorMsg}>{this.state.retypeError}</Text>
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
  errorMsg: {
    color:'white',
    textAlign:'left', 
    marginLeft:10,
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