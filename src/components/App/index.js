import React from 'react'
import { Route } from 'react-router-dom'
import Test from '../Test'

const App = () => (
  <div>
    <header>
    </header>
    <main>
      <Route exact path="/" component={Test} />
    </main>
  </div>
)

export default App