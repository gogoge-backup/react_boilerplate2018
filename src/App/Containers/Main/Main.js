import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './main.css'
const Main = () => (
  <div>
    <h1>{'Main'}</h1>
  </div>
)
// export default Main
export default CSSModules(Main, styles)
