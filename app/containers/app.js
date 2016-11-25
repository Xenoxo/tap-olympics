import React, {Component} from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { homescene } from '../reducers/reducers';
import HomesceneContainer from '../components/HomesceneContainer';

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
