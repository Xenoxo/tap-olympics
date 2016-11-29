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

var incamt = new Animated.Value(300);

export default class Homescene extends Component {
  constructor(props){
    super(props);
    this.state ={
      value: new Animated.Value(300),
    }
    var theref;
    this._animatedValue = new Animated.Value(300)
  }

  componentDidMount() {
    this.animateBar()
  }

  animateBar(newAmt = 300){
    let remaining = (newAmt/300) * 3000
     Animated.timing(
       this.state.value,
       {
        toValue: 0,
        duration: remaining,
        easing: Easing.linear()
       }
     ).start();
  }

  increase(){
    if (this.state.value._value < 290) {
      let num = this.state.value._value + 10
      this.state.value.setValue(num);
      this.animateBar(num);
    }
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
        <TouchableOpacity onPress={this.increase.bind(this)} style={styles.button}>
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
        <Text>{this.state.value._value}</Text>
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