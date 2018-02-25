import React from 'react'
import { Route } from 'react-router-dom'
import Test from '../Test'

import './App.scss'

const App = () => (
  <div>
    <header />
    <main>
      <Route exact path="/" component={Test} />
    </main>
  </div>
)

export default App
