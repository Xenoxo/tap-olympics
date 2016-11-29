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
      value: 0,
    }
  }

  // componentDidMount() {
  //   this.animateBar()
  // }

  // increase(){
  //   if (this.state.value._value < 290) {
  //     let num = this.state.value._value + 10
  //     this.state.value.setValue(num);
  //     this.animateBar(num);
  //   }
  // }

	render() {
    const {presses, progress, increment, decrement, jumpTen} = this.props
		return (
			<View style={styles.container}>
				<Text>Number of presses</Text>
        <Text>{presses}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={{textAlign: 'center', color:'white'}}>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={jumpTen} style={styles.button}>
          <Text style={{textAlign: 'center', color:'white'}}>Down</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={jumpTen} style={styles.button}>
          <Text style={{textAlign: 'center', color:'white'}}>increase</Text>
        </TouchableOpacity>
        <View style={styles.barContainer}>
          <Animated.View style={[styles.bar,{ width: progress}]}>
          </Animated.View>
        </View>
        
        <Text>hey</Text>
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