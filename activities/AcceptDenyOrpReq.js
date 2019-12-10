import React, { Component }  from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import DummyTwo from './DummyTwo';
import { LinearGradient } from 'expo-linear-gradient';
import Firebase, {db} from '../config/Firebase';

class AcceptDenyOrpReq extends React.Component{
  static navigationOptions=
  {
    title:'Accept or Deny',
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
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      data_Values: [],
    };
  }
 componentDidMount(){
    const { currentUser } = Firebase.auth() 
           this.setState({ currentUser })
  }

  componentWillMount() {
        db.ref('OrpDReq').on('value', function(snapshot) {
           let data = snapshot.val();
           for(let i in data) {
               this.state.data_Values.push(data[i]);
           }
           this.setState({data_Values: this.state.data_Values});
       }.bind(this));
  }
    render()
    {
  return (
      <View style={styles.container}>
      <DummyTwo navigation={this.props.navigation} data_Values={this.state.data_Values}></DummyTwo>
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

export default AcceptDenyOrpReq;
