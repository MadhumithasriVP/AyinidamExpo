import React, { Component }  from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Firebase, {db} from '../config/Firebase';

let addItem = (Quantity, People) => {
  const userId = Firebase.auth().currentUser.uid;
   db.ref('/OrpDReq/' + userId)
    .set({
      Q:Quantity,
      People:People,
          });
};
class FoodRequestPage extends React.Component{
  componentDidMount(){
  const { currentUser } = Firebase.auth()
    this.setState({ currentUser })
}
componentWillMount() {
}
  static navigationOptions=
  {
    title:'Request Details',
    headerStyle:{backgroundColor:'#003399'},
    headerTintColor: '#fff',
    headerTitleStyle: {
           fontWeight: '500',
           fontSize: 25,
           color: '#F08080',
                      },
  }
  constructor(props) {
  super(props);
    this.state = {
    currentUser: null,
     People: '',
      Q:'',
     };
  }

toConfirmActivity = () =>
{
  addItem( this.state.Q, this.state.People);
  Alert.alert('Message:',`Confirm sent to Hotel.`);
 
}
    render()
    {
  return (
  <LinearGradient
              colors={['#003399','#3366FF','#3399FF','#66ccff']}
              style={styles.container}
  >
  <View>
        <Text style={styles.textDes}>Mention Quantity required in Kilogram and Total Number of People </Text>
        <Text style={styles.textDes}>Quantity Required</Text>
        <TextInput  
          value={this.state.Q}
          onChangeText={(Q) => this.setState({ Q })}
          style={styles.itemQtyDesign}
        />
        <Text style={styles.textDes}>Total Number of People</Text>
        <TextInput  
          value={this.state.People}
          onChangeText={(People) => this.setState({ People })}
          style={styles.itemQtyDesign}
        />

      <Button
              buttonStyle={styles.button}
              title="CONFIRM"
              titleStyle={styles.designTitle}
              onPress={this.toConfirmActivity}
            />
       {/* <Text 
        style={styles.textDesign}
        numberOfLines={5}
      ></Text>   */}
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
  },
  textDes:{
    fontSize:20,
    margin: 20,
  },
  itemDesign:{
    width: 300, 
    height: 44, 
    padding: 8, 
    borderWidth: 1, 
    borderColor: 'white', 
    color:'white',
  },
  itemQtyDesign:{
    marginLeft:5, 
    width: 100, 
    height: 44, 
    padding: 8, 
    borderWidth: 1, 
    borderColor: 'white',
    color:'white',
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

export default FoodRequestPage;
