import React, {Component} from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import { Router, Scene } from 'react-native-router-flux';

import Homescene from '../components/Homescene';
import ButtonsceneContainer from '../components/ButtonsceneContainer';
import StatScene from '../components/StatScene';

import Realm from 'realm';

// a store is created from reducers and holds the state tree
const reducer = combineReducers(reducers);
const store = createStore(reducer);
// const store = createStore(homescene);

// const scenes = Actions.crea


// 	<HomesceneContainer />
export default class App extends Component {
  componentDidMount(){
  }
  render() {		
		// const PlayerSchema = {
		//   name: 'Player',
		//   primaryKey: 'id',
		//   properties: {
		//     username:     'string',
		//     email: 'string',
		//     password: 'string',
		//     score: 'int',
		//     cars:     {type: 'list', objectType: 'Car'},
		//     picture:  {type: 'data', optional: true}, // optional property
		//   }
		// };

		const PlayerSchema = {
		  name: 'Player',
		  // primaryKey: 'id',
		  properties: {
		    score: {type: 'int', default: 1}
		  }
		};		

		let realm = new Realm({
			schema: [PlayerSchema]
		});

  	// let realm = new Realm({
  	// 	schema: [{name: 'Dog', properties: {name: 'string'}}]
   // 	});
    return (
			<Provider store={store}>
				<Router>
					<Scene key="root">
						<Scene
							key="homescene"
							component={Homescene}
							hideNavBar={true}
							realm={realm}
							initial/>
						<Scene 
							key="buttonscene"
							component={ButtonsceneContainer}
							realm={realm}/>
						<Scene 
							key="statscene"
							component={StatScene}/>							
					</Scene>					
				</Router>
			</Provider>
    );
  }
}
