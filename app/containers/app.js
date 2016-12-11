import React, {Component} from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import { Router, Scene } from 'react-native-router-flux';

import Homescene from '../components/Homescene';
import ButtonsceneContainer from '../components/ButtonsceneContainer';
import StatScene from '../components/StatScene';

// a store is created from reducers and holds the state tree
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {		
    return (
			<Provider store={store}>
				<Router>
					<Scene key="root">
						<Scene
							key="homescene"
							component={Homescene}
							hideNavBar={true}
							initial/>
						<Scene 
							key="buttonscene"
							component={ButtonsceneContainer}/>
						<Scene 
							key="statscene"
							component={StatScene}/>							
					</Scene>					
				</Router>
			</Provider>
    );
  }
}
