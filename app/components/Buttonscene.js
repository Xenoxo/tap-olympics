import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';

export default class Buttonscene extends Component {
  constructor(props){
    super(props);
  }
  
	render() {
    const {presses, progress, increment, set} = this.props
		return (
			<View style={styles.container}>
				<Text>Number of presses</Text>
        <Text>{presses}</Text>
        <TouchableOpacity onPress={this.props.tapHandler} style={styles.button}> 
          <Text style={{textAlign: 'center', color:'white'}}>increase</Text>
        </TouchableOpacity>
        <View style={styles.barContainer}>
          <Animated.View style={[styles.bar,{ width: progress}]}>
          </Animated.View>
        </View>
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
  bar:{
    height:50,
    width:70,
    backgroundColor: '#BD2C00',
  },
});