import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppleBasket from './containers/appleBasket'
import App from './containers/App'
import configureStore from './store/configureStore'
require('./styles/appleBasket.css')
const store = configureStore()

render(
  <Provider store={store}>
    <AppleBasket />
  </Provider>,
  document.getElementById('root')
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root2')
)