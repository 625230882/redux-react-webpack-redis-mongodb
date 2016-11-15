// apple basket reducer

export default (state = {
}, action) => {

    let newState ;

    //console.log();
    switch (action.type) {
        case 'apple/BEGIN_PICK_APPLE':
            newState = Object.assign({}, state, {
                isPicking: true
            });
            return newState;

        case 'apple/DONE_PICK_APPLE':
            console.log('state.apples')
            console.log(state.apples)
            if(!state.newAppleId){
                state.newAppleId = 0;
                state.apples = []
            }
            newState = Object.assign({}, state, {
        
                apples: [
                    ...state.apples,
                    {
                        id: state.newAppleId,
                        weight: action.payload,
                        isEaten: false
                    }
                ],
                newAppleId: state.newAppleId + 1,
                isPicking: false
            })
            return newState;

        case 'apple/FAIL_PICK_APPLE':
            //这里只是简单处理
            newState = Object.assign({}, state, {
                isPicking: false
            });
            return newState;

        case 'apple/CLEAN_PICK_APPLE':
            //这里只是简单处理
            return {};
        
        case 'apple/EAT_APPLE':
            newState = Object.assign({}, state, {
                apples: [
                    ...state.apples.slice(0, action.payload),
                    Object.assign({}, state.apples[action.payload], { isEaten: true }),
                    ...state.apples.slice(action.payload + 1)
                ]
            })
            return newState;

        default:
            // initial state data here, get data from mongodb
            return state;
    }

};