'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buttonActions } from '../actions/buttonActions';

import Homescene from './Homescene';

const mapStateToProps = (state) => ({
  presses: state.homescene.presses, //pressess is the specific state to be modified on this component
})

const boundActionCreators = (dispatch) => ({
  actions: bindActionCreators(buttonActions, dispatch)
})


class HomesceneContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // console.log("the props are",this.props)
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
    const { presses, actions } = this.props
    return (
      <Homescene 
        presses={presses}
        {...actions}/>
    )
  }
}

export default connect(mapStateToProps, boundActionCreators)(HomesceneContainer);
