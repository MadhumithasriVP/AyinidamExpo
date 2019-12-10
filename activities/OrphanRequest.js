import React, { Component } from 'react';
import Dummy from './Dummy';
import Firebase, {db} from '../config/Firebase';
export default class OrphanRequest extends Component {
  static navigationOptions=
  {
    title:'List of Doantions Made',
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
        db.ref('/HotelDReq').on('value', function(snapshot) {
           let data = snapshot.val();
           for(let i in data) {
               this.state.data_Values.push(data[i]);
           }
           this.setState({data_Values: this.state.data_Values});
       }.bind(this));
  }

  render() {
      return (
            <Dummy navigation={this.props.navigation} data_Values={this.state.data_Values}/>
      ) 
    }
}