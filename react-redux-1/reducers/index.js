import { combineReducers } from 'redux'
import basket from './counter'
import appleBasket from './appleBasket'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// Add the reducer to your store on the `routing` key

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  basket,appleBasket,
  routing: routerReducer
})

export default rootReducer
