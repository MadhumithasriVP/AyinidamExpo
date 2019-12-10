import React, { Component } from 'react';
import FbHotelRetrieval from './FbHotelRetrieval';
import Firebase, {db} from '../config/Firebase';
export default class LookHotels extends Component {
  static navigationOptions=
  {
    title:'Search for Hotels',
    headerStyle:{backgroundColor:'#003399'},
    headerTintColor: '#fff',
    headerTitleStyle: {
           fontWeight: '500',
           fontSize: 25,
           color: '#F08080',     },
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
        db.ref('Users/Hotels').on('value', function(snapshot) {
           let data = snapshot.val();
           for(let i in data) {
               this.state.data_Values.push(data[i]);
           }
           this.setState({data_Values: this.state.data_Values});
       }.bind(this));
  }

  render() {
      return (
            <FbHotelRetrieval navigation={this.props.navigation} data_Values={this.state.data_Values}/>
      ) 
    }
}