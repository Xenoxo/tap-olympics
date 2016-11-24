'use strict';

import React, {Component} from 'react';
import Homescene from './Homescene';
import {Test} from '../components/Test'
import { connect } from 'react-redux';
import { actionCreators } from './HomesceneRedux';


// import * as counterActions from '../actions/counterActions';

const mapStateToProps = (state) => ({
  presses: state.presses,
})

// const mapActionToProps = (action) => ({
//   action: actionCreator,
// })


class HomesceneContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(this.props)
  }

  onButtonPress = () => {
    const {dispatch} = this.props
    dispatch(actionCreators.increment())
  };

  render() {
    const { presses } = this.props
    return (
      <Homescene 
        presses={presses}
        handleButtonPress={this.onButtonPress}/> //{..actions}
    )
  }
}

export default connect(mapStateToProps)(HomesceneContainer);