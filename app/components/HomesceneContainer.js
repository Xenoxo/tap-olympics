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
    console.log('props after mount', this.props)
    this.animateBar();
  }

  // newProgress(){
  //   if (this.props.progress._value < 290) {
  //     let num = this.props.progress._value + 10
  //     this.state.value.setValue(num); // reducer

  //     this.animateBar(num);
  //   }

  // }

  animateBar(newAmt=BASE_PROGRESS){
    let remaining = (newAmt/BASE_PROGRESS) * 3000
    
    
    console.log('props in animateBar', this.props.progress._value)
    Animated.timing(
      this.props.progress,
      {
        toValue: 0,
        duration: remaining,
        easing: Easing.linear()
       }
     ).start();
    console.log('why i no start???')
  }

  tapHandler(){
    //let num = this.props.progress._value + 10
    var thing = () => this.animateBar()
    let yo = new Animated.Value(300)
    // this.props.progress.setValue(300)
    this.props.actions.set(10)
    console.log('props in taphandler', this.props.progress)
    this.animateBar(200);
    // thing()
    
  }



  render() {
    const { presses, progress, actions } = this.props
    console.log(this.props.progress);
    return (
      <Homescene
        tapHandler={this.tapHandler.bind(this)}
        presses={presses}
        progress={progress}
        {...actions}/>
    )
  }
}

export default connect(mapStateToProps, boundActionCreators)(HomesceneContainer);
