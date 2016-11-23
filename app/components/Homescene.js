import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export class Homescene extends Component {
  constructor(props){
    super(props);
    this.state = {
      presses: 0,
    }
  }
  handlePress(){
    this.setState({presses: this.state.presses + 1})
    // console.log('pressing');
  }
	render() {
		return (
			<View style={styles.container}>
				<Text>Number of presses</Text>
        <Text>{this.state.presses}</Text>
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