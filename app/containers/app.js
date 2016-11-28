import React, {Component} from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import HomesceneContainer from '../components/HomesceneContainer';

// a store is created from reducers and holds the state tree
const reducer = combineReducers(reducers);
const store = createStore(reducer);
// const store = createStore(homescene);

export default class App extends Component {
  componentDidMount(){
    console.log(store)
  }  
  render() {
    return (
			<Provider store={store}>
				<HomesceneContainer />
			</Provider>
    );
  }
}
