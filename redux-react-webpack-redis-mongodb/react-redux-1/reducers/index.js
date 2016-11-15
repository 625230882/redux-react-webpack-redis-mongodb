import { combineReducers } from 'redux'
import basket from './counter'
import appleBasket from './appleBasket'
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  basket,appleBasket
})

export default rootReducer
