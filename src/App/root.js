import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Containers/Main'
import Second from './Containers/Second'

const Root = () => (
  <div>
    <Main />
    <Second />
  </div>
)

ReactDOM.render(<Root />, document.getElementById('root'))
