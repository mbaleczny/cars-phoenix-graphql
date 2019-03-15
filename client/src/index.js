import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import client from './config/apolloClient'
import App from './containers/layouts/App'

import * as serviceWorker from './config/serviceWorker'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.register()
