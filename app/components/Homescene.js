import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Animated,
  Easing
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Homescene extends Component {
  constructor(props){
    super(props);
    this.nav_buttonscene = Actions.buttonscene.bind(this);
    this.nav_statscene = Actions.statscene.bind(this);
  }

	render() {
		return (
			<View style={styles.container}>
				<Text>This is the Homescene!</Text>
        <TouchableOpacity onPress={this.nav_buttonscene} style={styles.button}>
          <Text style={styles.buttontxt}>GO TO BUTTONSCENE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.nav_statscene} style={styles.button}>
          <Text style={styles.buttontxt}>GO TO STATS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontxt}>Thing1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontxt}>Thing2</Text>
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
