import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './main.css'
import { a } from '../Second'
const k = { a: 1, b: 2 }
@CSSModules(styles)
export default class Main extends Component {
  componentWillMount() {
    this.setState({
      k: 3,
    })
  }

  state = {
    k: 2,
  }

  click = () => {
    console.warn(a)
    console.warn(...k)
    console.warn(this.state)
  }
  render() {
    return (
      <div styleName="tg">
        <h1 styleName="tt">{'Main'}</h1>
        <button onClick={this.click}>Go</button>
      </div>
    )
  }
}

// export default CSSModules(Main, styles)
