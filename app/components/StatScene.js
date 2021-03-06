import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class StatScene extends Component {
  constructor(props){
    super(props);
    this.state ={
      lastcount: 0,
      totalcount: 0,
    }
  }

  async getAsyncData(){
    try {
      await AsyncStorage.getItem('latestcount').then((result)=>{//promise for asyncstorage
        this.setState({lastcount: result});
      });
      await AsyncStorage.getItem('totalcount').then((result)=>{
        this.setState({totalcount: result});
      });
    } catch (error) {
      // Error saving data
    }
  }

  componentDidMount(){
    this.getAsyncData();
  }

	render() {
    // console.log(this.state.count);
    const {presses, progress, increment, set} = this.props
		return (
			<View style={styles.container}>
        <Text style={{textAlign: 'left'}}>Presses last session: {this.state.lastcount}</Text>
        <Text style={{textAlign: 'left'}}>Highest presses: </Text>
        <Text style={{textAlign: 'left'}}>Total number of presses: {this.state.totalcount}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#BD2C00',
  },
  barContainer:{
    // alignSelf: 'stretch',
    // marginLeft: 15,
    // marginRight: 15,    
    width: 300,
    borderWidth: 1,
    height:50,
  },
  button:{
    padding:10,
    backgroundColor: '#BD2C00',
    marginBottom: 5,
  },
  buttontxt:{
    color: 'white'
  }
});


/*
        <TouchableOpacity onPress={this.nav_buttonscene} style={styles.button}>
          <Text style={styles.buttontxt}>GO TO BUTTONSCENE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.nav_buttonscene} style={styles.button}>
          <Text style={styles.buttontxt}>STATS</Text>
        </TouchableOpacity>*/