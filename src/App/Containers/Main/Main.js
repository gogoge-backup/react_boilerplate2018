import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './main.css'

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
