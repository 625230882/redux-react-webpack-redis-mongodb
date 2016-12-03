export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
//导出加一的方法
export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}
//导出减一的方法
export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

export function addPic(file) {
  //console.log(file);
  return {
    type: 'ADD_PICTURE',
    file: file
  }
}

export function addText(text) {
  //console.log(text);
  return {
    type: 'ADD_TEXT',
    text: text
  }
}


export function deletePic(payload){
    return {
      type: 'DELETE_PIC',
      payload: payload
    }
}

export function addPics(file){

    var data = {}
    data.img = file[0];
    var form_data = new FormData();
    form_data.append('img', file[0]);
    return (dispatch, getState) => {
      dispatch(addPic(file[0]));
    }
}

export function addContent(text){
  return {
    type: 'ADD_CONTENT',
    text: text
  }
}


export function upload(){

  return (dispatch, getState) => {
    var form_data = new FormData();
    var value = getState().basket;
    value.pics.map(pic =>{
      form_data.append('img', pic.file);
    })
   // form_data.append('img', value.pics[0].file);
    form_data.append('title', value.title);
    form_data.append('content', value.content);
    console.log(value)
      $.ajax({
              url: '/addPic',
              method: 'post',
              data: form_data,
              contentType: false,
              processData: false
          }).done(data => {
              //console.log(data);
              //dispatch(addPic(file[0]));

          }).fail( xhr => {
            console.log(xhr);
          })
  }
}

//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export function incrementIfOdd() {
  return (dispatch, getState) => {
    //获取state对象中的counter属性值
    const { count } = getState().basket.num[0].count
    console.log(count)
    //偶数则返回
    if (count % 2 === 0) {
      return
    }
    //没有返回就执行加一
    dispatch(increment())
  }
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export