import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function basket(state = {
    title: '',
    content: '',
    payload : -1,
    pics: [

    ],
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
    case 'ADD_PICTURE':
        //console.log(action.file);
        newState = Object.assign({}, state, {
            payload : state.payload + 1,
            pics: [
                ...state.pics,
                {   
                    payload : state.payload + 1,
                    file: action.file
                }
            ]
        });
        return newState;
    
    case 'ADD_TEXT':
        
        newState = Object.assign({}, state, {
            title: action.text
        });
        return newState;
    

    case 'ADD_CONTENT':
        
        newState = Object.assign({}, state, {
            content: action.text
        });
        return newState;

    case 'DELETE_PIC':
        newState = Object.assign({}, state, {
            payload : state.payload - 1,
            pics : [
                ...state.pics.filter((value) => {
                    return value.payload != action.payload;
                })
                //splice(0, action.payload),
            ]
        });
        return newState;

    default:
      return state
  }
}