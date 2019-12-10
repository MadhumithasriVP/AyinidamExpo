import  React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Firebase,{db} from '../config/Firebase';
export default class Loading extends React.Component {
  static navigationOptions=
  {
    header: null,    //Hide navigator top
  }
  state = {loggedIn: null };
  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
     // this.props.navigation.navigate(user ? 'HotelHome' : 'Login')
       if(user)
       { 
         this.setState({ loggedIn: true}) 
        //  const USERtype[]= ('Hotels','Orphanages','Function Halls');
        //  db.ref('/Users/'+USERtype+'/'+user.uid)
        //    .once('value')
        //   .then(snapshot {=>
        //  const dbUser = snapshot.child("firstSeenVal").val();
          console.log(user.uid);
          /*db.ref('/Users')
            .on('value',function(snapshot) {
             snapshot.forEach(function(childSnapshot) {
              dbUser= snapshot.child(user.uid).child("firstSeenVal").val();
               console.log(dbUser);  
               }); 
               if(dbUser == 'Hotel')
             {
               this.props.navigation.navigate('HotelHome');
             }
             
             if(dbUser == 'Orphanage')
             {
               this.props.navigation.navigate('OrphanageHome');
             }
             if(dbUser == 'Function Hall')
             {
               this.props.navigation.navigate('FunctionHome');
             }          
           });*/
         this.props.navigation.navigate('Login');  
       }
       else 
       { 
           this.props.navigation.navigate('Login');
       }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})