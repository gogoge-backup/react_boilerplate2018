import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './main.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incCounter, decCounter } from './action'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return state.main
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ incCounter, decCounter }, dispatch),
  }
}

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class Main extends Component {
  onInc = () => {
    this.props.actions.incCounter(3)
  }

  onDec = () => {
    this.props.actions.decCounter(2)
  }

  render() {
    return (
      <div styleName="tg">
        <h1 styleName="tt">{this.props.counter}</h1>
        <button onClick={this.onInc}>+</button>
        <button onClick={this.onDec}>-</button>
      </div>
    )
  }
}

Main.propTypes = {
  actions: PropTypes.object,
  counter: PropTypes.number,
}
