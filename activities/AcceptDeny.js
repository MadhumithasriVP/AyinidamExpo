import React, { Component }  from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

class AcceptDeny extends React.Component{
  static navigationOptions=
  {
    title:'Vehicle Details',
    headerStyle:{backgroundColor:'#003399'},
    headerTintColor: '#fff',
    headerTitleStyle: {
           fontWeight: '500',
           fontSize: 25,
           color: '#F08080',
                      },
  }
  toAcceptActivity = () =>
{
  Alert.alert('Message:',`Request Accepted.`);
}
toDenyActivity = () =>
{
  Alert.alert('Message:',`Request Denied.`);
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
      ></Text>
      <View style={styles.makeGroup}>
            <Button
              buttonStyle={styles.button}
              title="ACCEPT"
              titleStyle={styles.designTitle}
              onPress={this.toAcceptActivity}
            />
            <Button
              buttonStyle={styles.button}
              title="DENY"
              titleStyle={styles.designTitle}
              onPress={this.toDenyActivity}
            />
      </View>
    </View>
  </LinearGradient>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
  },
   textDesign:{
    fontSize:20,
    height:400,
    margin: 5,
    borderColor:'#E4E4E2',
    borderRadius:5,
    borderWidth:1,
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
    height: 50,
    borderWidth: 1,
    borderRadius: 15  
  },
  designTitle:{
    fontSize: 20, 
    color:'blue'
  }
});

export default AcceptDeny;
