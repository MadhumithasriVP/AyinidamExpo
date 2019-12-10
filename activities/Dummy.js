import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, ListView, Text, View, Platform, TouchableOpacity } from 'react-native';
import Firebase, {db} from '../config/Firebase';

export default class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
        }
    }
    
    getDataSource(data_Values: Array<any>): ListView.DataSource {
        if(!data_Values) return;
        return this.state.dataSource.cloneWithRows(data_Values);
    }

    componentDidMount() {
        this.setState({dataSource: this.getDataSource(this.props.data_Values)});
    }

    componentWillReceiveProps(props) {
        this.setState({dataSource: this.getDataSource(props.data_Values)});
    }

    ListViewItemSeparator = () => {
    //Divider for the list item
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#080808' }}
      />
     );
    };

    renderRow(rowData){
            return (
              <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    paddingTop: 16,
                    paddingBottom: 16,
                   }}> 
                     <TouchableOpacity >
                        <Text style={styles.textViewContainer}>{rowData.Q}</Text>
                        <Text style={styles.textViewContainer}>{rowData.Item}</Text>
                     </TouchableOpacity >
                </View>
            );
    }

    render() {
        return(
          <View style={styles.MainContainer}>
            <ListView
                dataSource={this.state.dataSource}
                renderSeparator={this.ListViewItemSeparator}
                enableEmptySections={true}
                renderRow= {this.renderRow.bind(this)}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 30,
    backgroundColor: '#ffffff',
    padding: 5,
  },
  textViewContainerHeading: {
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
  },
  textViewContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});