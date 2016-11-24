// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native'


// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

// import * as reducers from '../reducers';
// import CounterApp from './counterApp';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer);

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Homescene />
//       </Provider>
//     );
//   }
// }


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
  Text
} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../components/HomesceneRedux'
import HomesceneContainer from '../components/HomesceneContainer'

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<HomesceneContainer />
			</Provider>
    );
  }
}


// export default class tapolympics extends Component {
//   render() {
//     return (<Homescene />);
//   }
// }

// AppRegistry.registerComponent('Homescene', () => AppWithStore);


//------- //

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// // Import the reducer and create a store
// import { reducer } from './app/components/HomesceneRedux'
// const store = createStore(reducer)


// import HomesceneContainer from './app/components/HomesceneContainer'

// const AppWithStore = () => (
// 	<Provider store={store}>
// 		<HomesceneContainer />
// 	</Provider>
// )


// // export default class tapolympics extends Component {
// //   render() {
// //     return (<Homescene />);
// //   }
// // }

// AppRegistry.registerComponent('tapolympics', () => AppWithStore);


// 'use strict';