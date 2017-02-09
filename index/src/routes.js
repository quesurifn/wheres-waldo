import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './Home.js'
import Name from './Name.js'
import Level from './level.js'
import Level1 from './level1.js'
import Level2 from './level2.js'
//import result from './result.js'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home} >
      <Route path='/name' component={Name} />
      <Route path="/level/:username" component={Level} />
      <Route path='/level1' component={Level1} />
      <Route path='/level2' component={Level2} />
    </Route>
</Router>
);

export default routes;
