import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Main } from './pages/main'

import { GlobalStyle } from './components/GlobalStyle.js'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
    
      <Route exact path="/">
       <Main/>
      </Route>

    </Switch>
  </BrowserRouter>
)

export { App }