import React, {Component} from 'react';

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
