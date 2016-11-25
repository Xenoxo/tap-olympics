import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Homescene extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

	render() {
    const {presses, handleUpButtonPress, handleDownButtonPress} = this.props
		return (
			<View style={styles.container}>
				<Text>Number of presses</Text>
        <Text>{presses}</Text>
        <TouchableOpacity onPress={handleUpButtonPress} style={styles.button}>
          <Text style={{textAlign: 'center', color:'white'}}>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDownButtonPress} style={styles.button}>
          <Text style={{textAlign: 'center', color:'white'}}>Down</Text>
        </TouchableOpacity>        
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});