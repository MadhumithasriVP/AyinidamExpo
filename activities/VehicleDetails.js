import React, { Component }  from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

class Map extends React.Component{
  static navigationOptions=
  {
    title:'Vehicle Details',
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
      <TextInput
        style={{ height: 300, borderColor: '#E4E4E2', borderWidth: 1, margin: 20 }}
        multiline = {true}
        numberOfLines = {18}
      />
      <Button
              buttonStyle={styles.button}
              title="SUBMIT"
              titleStyle={styles.designTitle}
             />
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

export default Map;
