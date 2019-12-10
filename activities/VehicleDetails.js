import React, { Component }  from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class VehicleDetails extends React.Component{
  static navigationOptions=
  {
    title:'Orphanage Message',
    headerStyle:{backgroundColor:'#003399'},
    headerTintColor: '#fff',
    headerTitleStyle: {
           fontWeight: '500',
           fontSize: 25,
           color: '#F08080',
                      },
  }
    render()
    {
  return (
  <LinearGradient
              colors={['#003399','#3366FF','#3399FF','#66ccff']}
              style={styles.container}
  >
    <View>
      <Text 
        style={styles.textDesign}
        numberOfLines={5}
      >Request Accepted</Text>
    </View>
  </LinearGradient>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textDesign:{
    fontSize:20,
    height:300,
    margin: 20,
    borderColor:'#E4E4E2',
    borderRadius:5,
    borderWidth:1,
  }
});

export default VehicleDetails;
