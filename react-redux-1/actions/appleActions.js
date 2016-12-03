
//这是名空间，对普通action做划分
const prefix = 'apple/';

let actions = {

    addApple: () => (dispatch, getState) => {
        $.ajax({
            url: '/apple',
            method: 'post',
            data: getState().appleBasket
        }).done(data => {
            console.log('data');
            console.log(data);
            //发射普通 action
            dispatch(actions.cleanPickApple());
        }).fail( xhr => {
            //发射普通 action, 其负载是一个error
            dispatch({
                type: 'FAIL_PICK_APPLE',
                payload: new Error(xhr.responseText) ,
                error: true
            }); 
        })
    },

    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: () => (dispatch, getState) => {

        var id = getState().newAppleId;
        //发送摘苹果请求
        try {
            dispatch(actions.donePickApple(id))
        } catch (error) {
            dispatch(actions.failPickApple(error));
        }
    },

    cleanPickApple: () => ({
        type: 'apple/CLEAN_PICK_APPLE'
    }),

    beginPickApple: () => ({
        type: 'apple/BEGIN_PICK_APPLE'
    }),

    donePickApple: appleWeight => ({
        type: 'apple/DONE_PICK_APPLE',
        payload: appleWeight
    }),

    failPickApple: errMsg => ({
        type: 'apple/FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),

    eatApple: appleId => ({
        type: 'apple/EAT_APPLE',
        payload: appleId
    })

};

export default actions;