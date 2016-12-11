'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buttonActions } from '../actions/buttonActions';

import { Actions } from 'react-native-router-flux';

import {
  Animated,
  Easing
} from 'react-native';

import Buttonscene from './Buttonscene';

import Realm from 'realm';

const mapStateToProps = (state) => ({
  presses: state.buttonscene.presses,
  progress: state.buttonscene.progress,
});

const boundActionCreators = (dispatch) => ({
  actions: bindActionCreators(buttonActions, dispatch)
});

const BASE_PROGRESS = 300;

class ButtonsceneContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(300),
    }
    this.tapHandler = this.tapHandler.bind(this);
    // var realm = this.props.realm;
  }

  componentDidMount(){
    if (this.props.realm === 0){
      realm.write(() => {
        realm.create('Player');
      });
    }
    // console.log(this.props.realm);
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
     ).start( // things in here are called everytime the value changes
       (obj)=>{
        if (obj.finished){
          Actions.homescene();
          // console.log(obj.finished);
        }
        
      }
     );
  }

  tapHandler(){
    let timeleft = this.state.progress._value
    let {increment} = this.props.actions
    // console.log(this.props.realm);
    if ( timeleft < 290 && timeleft > 0) {
      this.props.realm.write(() => {
        this.props.realm.score += 1;
      });      
      let num = this.state.progress._value + 10
      this.state.progress.setValue(num);
      this.animateBar(num);
    } else {
      // realm.write(() => {
      //   realm.create('Dog', {name: 'Rezzx'});
      // });
    }
    increment(); // passes the value through the reducer to increment
  }

  render() {
    const { presses, progress, actions } = this.props
    return (
      <Buttonscene
        tapHandler={this.tapHandler}
        progress={this.state.progress}
        presses={presses}
        propertyScore={this.props.realm.objects('Player').length}
        navback={Actions.homescene.bind(this)}
        {...actions}/>
    )
  }
}

export default connect(mapStateToProps, boundActionCreators)(ButtonsceneContainer);
