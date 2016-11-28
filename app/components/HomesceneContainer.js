'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { buttonActions } from '../actions/buttonActions';

import Homescene from './Homescene';

const mapStateToProps = (state) => ({
  presses: state.homescene.presses, //pressess is the specific state to be modified on this component
})


class HomesceneContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // console.log(this.props)
  }

  otherFunction(){
    // things can happen here that may in crease
    // or decrease the count which calls the functions
  }

  countIncrease = () => {
    const {dispatch} = this.props
    dispatch(buttonActions.increment())
  };

  countDecrease = () => {
    const {dispatch} = this.props
    dispatch(buttonActions.decrement())
  };

  render() {
    const { presses } = this.props
    return (
      <Homescene 
        presses={presses}
        handleUpButtonPress={this.countIncrease}
        handleDownButtonPress={this.countDecrease}/> //{..actions}
    )
  }
}

export default connect(mapStateToProps)(HomesceneContainer);