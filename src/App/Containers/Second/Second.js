import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './second.css'
const Second = () => (
  <div>
    <h1 styleName="bg">{'Second'}</h1>
  </div>
)
// export default Second
export default CSSModules(Second, styles)
