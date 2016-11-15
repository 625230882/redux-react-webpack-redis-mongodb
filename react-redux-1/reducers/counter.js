import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function basket(state = {
    num : [
        {
            count : 0
        }
    ]
}, action) {
let newState ;
  switch (action.type) {
      
    case INCREMENT_COUNTER:
        newState = Object.assign({}, state, {
            num : [
                    {
                        count : state.num[0].count + 1
                    }
                ]
        });
        return newState;
    case DECREMENT_COUNTER:
      newState = Object.assign({}, state, {
            num : [
                    {
                        count : state.num[0].count - 1
                    }
                ]
        });
        return newState;
    default:
      return state
  }
}