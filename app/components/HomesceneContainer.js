'use strict';

import React, {Component} from 'react';
import Homescene from './Homescene';
import { connect } from 'react-redux';

// import { actionCreators } from './HomesceneRedux';


// import * as buttonActions from '../actions/buttonActions';
import {buttonActions} from '../actions/buttonActions';

const mapStateToProps = (state) => ({
  presses: state.presses,
})


class HomesceneContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(buttonActions)
    console.log(this.props)
  }

  onButtonPressUp = () => {
    const {dispatch} = this.props
    console.log(dispatch)
    dispatch(buttonActions.increment())
  };

  onButtonPressDown = () => {
    const {dispatch} = this.props
    dispatch(buttonActions.increment())
  };

  render() {
    const { presses } = this.props
    return (
      <Homescene 
        presses={presses}
        handleUpButtonPress={this.onButtonPressUp}
        handleDownButtonPress={this.onButtonPressDown}/> //{..actions}
    )
  }
}

export default connect(mapStateToProps)(HomesceneContainer);