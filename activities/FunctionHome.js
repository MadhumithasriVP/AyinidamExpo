import React, { Component }  from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Firebase, {db} from '../config/Firebase';
import {Feather} from '@expo/vector-icons';

class FunctionHome extends React.Component{
 state = {
    currentUser: null
  };

 componentDidMount(){
  const { currentUser } = Firebase.auth()
          this.setState({ currentUser }) 
 }
 static navigationOptions= ({ navigation }) => {
  return {
    title:'Function Hall Activity',
    headerStyle:{backgroundColor:'#77ccff'},
    headerTintColor: '#fff',
    headerTitleStyle: {
           fontWeight: '500',
           fontSize: 25,
           color: '#F08080',
                      },
    headerRight: (
      <TouchableOpacity onPress={()=>Firebase.auth()
                                             .signOut()
                                             .then(() => navigation.navigate('Login'))}>
      <Feather
        name="log-out"
        size={28} 
        color="white"
      />
      </TouchableOpacity>
    ),
  };
 };
toMapActivity = () =>
{
  this.props.navigation.navigate('LookOrphanages');
}
toOrphanReqActivity = () =>
{
  this.props.navigation.navigate('OrphanReq');
}
toAccDenActivity = () =>
{
  this.props.navigation.navigate('AcceptDeny');
}
toVehicleDetActivity = () =>
{
  this.props.navigation.navigate('VehicleDet');
}

render()
{
  const { navigate } = this.props.navigation;
  const{ currentUser } = this.state;
  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
            style={styles.stretch}
            source={require('../assets/profile2.png')}
        />
        <Text>Welcome {currentUser && currentUser.email} !</Text>
        <Text style={styles.profileText}>FUNCTION HALL</Text>
      </View>
      <LinearGradient
              colors={['#3399FF','#3366FF','#003399']}
              style={styles.alignNGra}
      >
          <View style={styles.makeGroup}>
           <Button
              buttonStyle={styles.button}
              title="Map"
              titleStyle={styles.designTitle}
              onPress={this.toMapActivity}/>           
           <Button 
              buttonStyle={styles.button}
              title="Donation to Orphanage" 
              titleStyle={styles.designTitle}
              outline = "true"
              onPress={this.toOrphanReqActivity}/>

          </View>
          <View style={styles.makeGroup}>
           <Button
              outline="true"
              buttonStyle={styles.button}
              title="Food Request Accept or Denial"
              titleStyle={styles.designTitle}
              onPress={this.toAccDenActivity}
             />
           <Button
              buttonStyle={styles.button}
              title="Transport Facility Details"
              titleStyle={styles.designTitle}
              onPress={this.toVehicleDetActivity}/>
          </View>
      </LinearGradient>    
    </View>  
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile:{
    backgroundColor: '#66ccff',
    alignItems: 'center',
  },
  profileText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  stretch: {
    marginTop:20,
    width: 200,
    height: 200,
    borderRadius: 200/ 2,
    borderColor: '#000000',
    borderWidth: 2,
  },
  alignNGra:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  makeGroup: {
    flexDirection: 'row',
  },
  button:{
    backgroundColor: '#ffffff',
    borderColor: '#F08080',
    margin: 20,
    minWidth: 10,
    width: 140,
    height: 110,
    borderWidth: 1,
    borderRadius: 15,
  },
  button1:{
    backgroundColor: '#ffffff',
    borderColor: '#F08080',
    margin: 5,
    minWidth: 10,
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
  },
  designTitle:{
    fontSize: 22, 
    color:'blue'
  }
}); 

export default FunctionHome;