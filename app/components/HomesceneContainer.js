'use strict';

import React, {Component} from 'react';
import Homescene from './Homescene';
import {Test} from '../components/Test'
import { connect } from 'react-redux';
// import * as counterActions from '../actions/counterActions';

const mapStateToProps = (state) => ({
  presses: state.presses,
})

class HomesceneContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // console.log("read here")
  }

  render() {
    const {presses} = this.props
    return (
      <Homescene presses={presses}/>
    )
  }
}

export default connect(mapStateToProps)(HomesceneContainer);