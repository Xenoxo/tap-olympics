'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buttonActions } from '../actions/buttonActions';

import {
  Animated,
  Easing
} from 'react-native';

import Homescene from './Homescene';

const mapStateToProps = (state) => ({
  presses: state.homescene.presses, //pressess is the specific state to be modified on this component
  progress: state.homescene.progress,
})

const boundActionCreators = (dispatch) => ({
  actions: bindActionCreators(buttonActions, dispatch)
})
const BASE_PROGRESS = 300;

class HomesceneContainer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      progress: new Animated.Value(300),
    }
    this.tapHandler = this.tapHandler.bind(this);
  }

  componentDidMount(){
    this.animateBar();
  }

  animateBar(newAmt=BASE_PROGRESS){
    let remaining = (newAmt/BASE_PROGRESS) * 3000
    
    
    // console.log('props in animateBar', this.props.progress._value)
    Animated.timing(
      this.state.progress,
      {
        toValue: 0,
        duration: remaining,
        easing: Easing.linear()
       }
     ).start(()=> console.log('i win'));
    
  }

  tapHandler(){
    let timeleft = this.state.progress._value
    let {increment} = this.props.actions
    if ( timeleft < 290 && timeleft > 0) {
      let num = this.state.progress._value + 10
      this.state.progress.setValue(num);
      this.animateBar(num);
    }
    increment();
  }

  render() {
    const { presses, progress, actions } = this.props
    return (
      <Homescene
        tapHandler={this.tapHandler}
        progress={this.state.progress}
        presses={presses}
        {...actions}/>
    )
  }
}

export default connect(mapStateToProps, boundActionCreators)(HomesceneContainer);
