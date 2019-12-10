import React, { Component }  from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Firebase, {db} from '../config/Firebase';

let addItem = (To, Quantity, Items) => {
  const userId = Firebase.auth().currentUser.uid;
   db.ref('/HotelDReq/' + userId)
    .set({
      To:To,
      Q:Quantity,
      Item:Items,
          });
};
class FoodDonatePage extends React.Component{
  componentDidMount(){
  const { currentUser } = Firebase.auth()
    this.setState({ currentUser })
}
componentWillMount() {
}
  static navigationOptions=
  {
    title:'Donate Details',
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
     Item: '',
      Q:'',
      To:'',
     };
  }

toConfirmActivity = () =>
{
  addItem( this.state.To, this.state.Q, this.state.Item);
  Alert.alert('Message:',`Confirm sent to Orphanage.`);
 
}
addTextInput = (key) => {
    let textInput = this.state.textInput;
    textInput.push(<View style={{padding:5, flexDirection: 'row'}}>
                   <TextInput key={key} style={styles.itemDesign}></TextInput> 
                   <TextInput key={key} style={styles.itemQtyDesign}></TextInput>
                   </View>);
    this.setState({ textInput })
}
    render()
    {
      const { params } = this.props.navigation.state;
  return (
  <LinearGradient
              colors={['#003399','#3366FF','#3399FF','#66ccff']}
              style={styles.container}
  >
  <View>
        <Text style={styles.textDes}>{`${params.OrgName}`}</Text>
        <Text style={styles.textDes}>To</Text>
        <TextInput  
          value={this.state.To}
          onChangeText={(To) => this.setState({ To })}
          style={styles.itemDesign}
        />
        <Text style={styles.textDes}>Mention Food Items and Quantity in Kilogram</Text>
        <Text style={styles.textDes}>Total Quantity</Text>
        <TextInput  
          value={this.state.Q}
          onChangeText={(Q) => this.setState({ Q })}
          style={styles.itemQtyDesign}
        />
        <Text style={styles.textDes}>Items</Text>
        <TextInput  
          value={this.state.Item}
          onChangeText={(Item) => this.setState({ Item })}
          style={styles.itemDesign}
        />
        {/* <Button title='+' onPress={() => this.addTextInput(this.state.textInput.length)} />
        {this.state.textInput.map((value, index) => {
          return value
        })} */}

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

export default FoodDonatePage;
