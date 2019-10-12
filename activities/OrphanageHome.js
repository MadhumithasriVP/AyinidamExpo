import React, { Component }  from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

class OrphanageHome extends React.Component{
 static navigationOptions=
  {
    title:'Orphanage Activity',
    headerStyle:{backgroundColor:'#003399'},
    headerTintColor: '#fff',
    headerTitleStyle: {
           fontWeight: '500',
           fontSize: 25,
           color: '#F08080',
                      },
  }
toVehicleDetActivity = () =>
{
  this.props.navigation.navigate('VehicleDet');
}
toMapActivity = () =>
{
  this.props.navigation.navigate('Map');
}
toOrphanReqActivity = () =>
{
  this.props.navigation.navigate('OrphanReq');
}
render()
{
  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
            style={styles.stretch}
            source={require('../assets/profile2.png')}
        />
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
              title="Accept"
              titleStyle={styles.designTitle}
             // onPress={this.toMapActivity}
             />
           <Button
              buttonStyle={styles.button}
              title="Map"
              titleStyle={styles.designTitle}
              onPress={this.toMapActivity}/>
          </View>
          <View style={styles.makeGroup}>
           <Button 
              buttonStyle={styles.button}
              title="Vehicle Details" 
              titleStyle={styles.designTitle}
              outline = "true"
             // onPress={this.toOrphanReqActivity}/>
           <Button
              buttonStyle={styles.button}
              title="Food Delivery Details"
              titleStyle={styles.designTitle}
              //onPress={this.toMapActivity}/>
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