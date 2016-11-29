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
  }

  componentDidMount(){
    // console.log("the props are",this.props)
    this.animateBar();
  }

  otherFunction(){
    // things can happen here that may in crease
    // or decrease the count which calls the functions
  }

  // increase(){
  //   if (this.state.value._value < 290) {
  //     let num = this.state.value._value + 10
  //     this.state.value.setValue(num);
  //     this.animateBar(num);
  //   }
  // }  

  animateBar(newAmt=BASE_PROGRESS){
    let remaining = (newAmt/BASE_PROGRESS) * 3000
     Animated.timing(
       this.props.progress,
       {
        toValue: 0,
        duration: remaining,
        easing: Easing.linear()
       }
     ).start();
  }

  render() {
    const { presses, progress, actions } = this.props
    return (
      <Homescene 
        presses={presses}
        progress={progress}
        {...actions}/>
    )
  }
}

export default connect(mapStateToProps, boundActionCreators)(HomesceneContainer);
