import React from 'react'

import { Switch, Link, Route, HashRouter as Router } from 'react-router-dom'

import First from '../First'
import Second from '../Second'
import NoMatch from '../NoMatch'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../../create-store'

const Main = () => (
  <div>
    <ConnectedRouter history={history}>
      <Router>
        <div>
          <Link to="/">{'Home'}</Link>
          <Link to="/Second">{'Second'}</Link>
          <hr />
          <Switch>
            <Route exact path="/" component={First} />
            <Route path="/Second" component={Second} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </ConnectedRouter>
  </div>
)

export default Main
