import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppleBasket from './containers/appleBasket'
import App from './containers/App'
import configureStore from './store/configureStore'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import FirstPage from './containers/FirstPage'
require('./styles/appleBasket.css')
const store = configureStore()


const history = syncHistoryWithStore(browserHistory, store)

// render(
//   <Provider store={store}>
//     <AppleBasket />
//   </Provider>,
//   document.getElementById('root')
// )

// render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root2')
// )

render((
   <Provider store={store}> 
        <Router history={history}>
            <Route path="/" component={AppleBasket} />
            <Route path="basket" component={AppleBasket} />
            <Route path="app" component={App}/>
        </Router>
   </Provider>
), document.getElementById('root2'))