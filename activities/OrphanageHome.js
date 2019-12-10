import React, { Component }  from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Firebase, {db} from '../config/Firebase';
import {Feather} from '@expo/vector-icons';

let usersRef = db.ref('/Users/Orphanages');

class OrphanageHome extends React.Component{
 state = {
    currentUser: null
  };

 componentDidMount(){
  const { currentUser } = Firebase.auth()
          this.setState({ currentUser }) 
 }
 static navigationOptions= ({ navigation }) => {
  return {
    title:'Orphanage Activity',
    headerStyle:{backgroundColor:'#003399'},
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
toVehicleDetActivity = () =>
{
  this.props.navigation.navigate('VehicleDet');
}
toMapActivity = () =>
{
  this.props.navigation.navigate('LookHotels');
}
toOrphanReqActivity = () =>
{
  this.props.navigation.navigate('OrphanReq');
}
toAccDenActivity = () =>
{
  this.props.navigation.navigate('AcceptDeny');
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
            source={require('../assets/orphanage.jpg')}
        />
        <Text>Welcome {currentUser && currentUser.email} !</Text>
        <Text style={styles.profileText}>ORPHANAGE</Text>
      </View>
      <LinearGradient
              colors={['#3399FF','#3366FF','#003399']}
              style={styles.alignNGra}
      >
          <View style={styles.makeGroup}>
           <Button
              outline="true"
              buttonStyle={styles.button}
              title="Accept or Deny"
              titleStyle={styles.designTitle}
              onPress={this.toAccDenActivity}
             />
           <Button
              buttonStyle={styles.button}
              title="Hotel List"
              titleStyle={styles.designTitle}
              onPress={this.toMapActivity}/>
          </View>
          <View style={styles.makeGroup}>
           <Button 
              buttonStyle={styles.button}
              title="Vehicle Details" 
              titleStyle={styles.designTitle}
              outline = "true"/>
           <Button
              buttonStyle={styles.button}
              title="Food Delivery Details"
              titleStyle={styles.designTitle}/>
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
    width: 130,
    height: 90,
    borderWidth: 1,
    borderRadius: 15  
  },
  designTitle:{
    fontSize: 24, 
    color:'blue'
  }
}); 

export default OrphanageHome;