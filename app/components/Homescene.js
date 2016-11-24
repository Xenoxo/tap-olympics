import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

import { actionCreators } from './HomesceneRedux'

export default class Homescene extends Component {
  constructor(props){
    super(props);
  }

  // handlePress(){
  //   this.setState({presses: this.state.presses + 1})
  //   // console.log('pressing');
  // }
  
  // onButtonPress = () => {
  //   const {dispatch} = this.props
  //   dispatch(actionCreators.increment(1))
  // };

  componentDidMount(){
    console.log("GET GUD");
    console.log(this.props)
  }

  handlePress = () => {
    console.log('yo');
    console.log(this.props);
  };

  // render() {
  //   return <Text>YOU MADE IT ALL THE WAY DOWN!</Text>
  // }
	render() {
    const {presses} = this.props
		return (
			<View style={styles.container}>
				<Text>Number of presses</Text>
        <Text>{presses}</Text>
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <View style={styles.button}>
            <Text style={{textAlign: 'center', color:'white'}}>Press Me!</Text>
          </View>
        </TouchableOpacity>
        {/*<TouchableOpacity onPress={this.setState({presses: this.state.presses + 1})}>
          
        </TouchableOpacity>        */}
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