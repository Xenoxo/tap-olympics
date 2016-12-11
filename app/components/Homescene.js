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

import Realm from 'realm';

import { Actions } from 'react-native-router-flux';

var realm;
var user;
export default class Homescene extends Component {
  constructor(props){
    super(props);
    this.nav_buttonscene = Actions.buttonscene.bind(this);
    this.nav_statscene = Actions.statscene.bind(this);
    const PlayerSchema = {
      name: 'Player',
      // primaryKey: 'id',
      properties: {
        score: {type: 'int', default: 1}
      }
    };    

    realm = new Realm({
      schema: [PlayerSchema]
    });    
  }

  addScore(){
    realm.write(()=>{
      user = realm.create('Player', {score: 5});
    })
  }

  incrCount(){
    let allplayer = realm.objects('Player');
    realm.write(()=>{
      realm.delete(allplayer);
    })
  }  

	render() {
    // const {presses, progress, increment, set} = this.props
    // console.log('inside Homescene', increment)
    let test = realm.objects('Player').filtered('score == "5"');
    let test2 = realm.objects('Player');
    console.log(test2);
		return (
			<View style={styles.container}>
				<Text>This is the Homescene!</Text>
        <Text>realm score count {test2.length}</Text>
        <TouchableOpacity onPress={this.nav_buttonscene} style={styles.button}>
          <Text style={styles.buttontxt}>GO TO BUTTONSCENE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.nav_statscene} style={styles.button}>
          <Text style={styles.buttontxt}>GO TO STATS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.addScore.bind(this)} style={styles.button}>
          <Text style={styles.buttontxt}>Create new "Player" realm object</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.incrCount.bind(this)} style={styles.button}>
          <Text style={styles.buttontxt}>Increase count</Text>
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
