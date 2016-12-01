import React, {Component} from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import HomesceneContainer from '../components/HomesceneContainer';
import ButtonsceneContainer from '../components/ButtonsceneContainer';
import { Router, Scene } from 'react-native-router-flux';

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
    return (
			<Provider store={store}>
				<Router>
					<Scene key="root">
						<Scene 
							key="homescene"
							component={HomesceneContainer}
							hideNavBar={true}
							initial/>
						<Scene 
							key="buttonscene"
							component={ButtonsceneContainer}/>
					</Scene>					
				</Router>
			</Provider>
    );
  }
}
