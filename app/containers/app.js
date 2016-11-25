import React, {Component} from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import { reducer } from '../components/HomesceneRedux'
// import * as reducers from '../reducers/index'; // Not working for some reason
import homescene from '../reducers/homescene';
import HomesceneContainer from '../components/HomesceneContainer';

// const reducer = combineReducers(reducers); //not working - going with default homescene
const store = createStore(homescene);

export default class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<HomesceneContainer />
			</Provider>
    );
  }
}
