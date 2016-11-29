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

export default class Homescene extends Component {
  constructor(props){
    super(props);
    this.state ={
      value: new Animated.Value(300),
    }
    var theref;
  }

  componentDidMount() {

  }

  startAnimation(){
     Animated.timing(          // Uses easing functions
       this.state.value,
       {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear()
       }       // Configuration
     ).start();                // Don't forget start!    
  }

	render() {
    const {presses, increment, decrement} = this.props
		return (
			<View style={styles.container}>
				<Text>Number of presses</Text>
        <Text>{presses}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={{textAlign: 'center', color:'white'}}>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={{textAlign: 'center', color:'white'}}>Down</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.startAnimation.bind(this)} style={styles.button}>
          <Text style={{textAlign: 'center', color:'white'}}>increase</Text>
        </TouchableOpacity>
        <View style={styles.barContainer}
          ref={(input)=>{
            theref = input;
          }
        }>
          <Animated.View style={[styles.bar,{ width: this.state.value}]}>
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
    width: 300,
    // marginLeft: 15,
    // marginRight: 15,
    borderWidth: 1,
    height:50,
  },
  bar:{
    height:50,
    width:70,
    backgroundColor: '#BD2C00',
  },
});