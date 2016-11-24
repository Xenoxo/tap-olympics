'use strict';


// import {bindActionCreators} from 'redux';

import React, {Component} from 'react';
import Homescene from './Homescene';
import {Test} from '../components/Test'
// import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))

const mapStateToProps = (state) => ({
  presses: state.presses,
})

class HomesceneContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log("read here")
    console.log(this.props)
  }

  // render() {
  //   const { state, actions } = this.props;
  //   return (
  //     <Counter
  //       counter={state.count}
  //       {...actions} />
  //   );
  // }

  render() {
    const {presses} = this.props
    return (
      <Homescene presses={presses}/>
    )
  }
}

// export default connect(
//   state => ({state: state.counter}), 
//   (dispatch) => ({actions: bindActionCreators(counterActions, dispatch)})
//   )(CounterApp);

export default connect(mapStateToProps)(HomesceneContainer);