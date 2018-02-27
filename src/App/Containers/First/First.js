import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './first.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incCounter, decCounter } from './action'
import PropTypes from 'prop-types'
import { selector as mapStateToProps } from './selector'
import { push } from 'react-router-redux'
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ push, incCounter, decCounter }, dispatch),
  }
}
const STEP = 3
@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class Main extends Component {
  onInc = () => {
    this.props.actions.incCounter(STEP)
  }

  onDec = () => {
    this.props.actions.decCounter(STEP)
  }

  onNotFound = () => {
    this.props.actions.push('/gg')
  }

  render() {
    return (
      <div styleName="tg">
        <h1 styleName="tt">{this.props.counter}</h1>
        <button onClick={this.onInc}>{'+'}</button>
        <button onClick={this.onDec}>{'-'}</button>
        <button onClick={this.onNotFound}>{'Go to NotFound'}</button>
      </div>
    )
  }
}

Main.propTypes = {
  actions: PropTypes.object,
  counter: PropTypes.number,
}
