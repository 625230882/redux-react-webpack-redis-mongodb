import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone';

class Counter extends Component {

  handleTitleChange(event) {
    this.props.addText(event.target.value);
  }

  handleContentChange(event) {
    this.props.addContent(event.target.value);
  }
  
  render() {
    //从组件的props属性中导入四个方法和一个变量
    //渲染组件，包括一个数字，四个按钮
        const {deletePic, upload, addText, state, increment, incrementIfOdd, incrementAsync, decrement, addPics} = this.props;

    if(state.pics.length > 0)
      console.log(state);
    return (
      <div>
          <div>
          <p>title: <input type='text'  onChange={this.handleTitleChange.bind(this)}/></p>
          <p>content: <input type='text'  onChange={this.handleContentChange.bind(this)}/></p>
          <input type="submit" value="Submit" onClick={upload} />
        </div>
      <div>
        <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={addPics}>
            <p>Drop an image or click to select a file to upload.</p> 
        </Dropzone>
      </div>
      <div>
      {
          state.pics.length > 0 ?
          state.pics.map(pic =>
             <div  className="image-thumb" key = {pic.file.preview}>
                <img src={pic.file.preview} />
                <button  className="image-fav" onClick={() => deletePic(pic.payload)}></button>
            </div>
            // <img 
            // key = {pic.file.preview}
            // src = {pic.file.preview} height="42" width="42"/>
          ) : null
      }
      </div>
      
      <p>
        Clicked: {state.num[0].count} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
        <li><a href="/basket">Basket</a></li>
        </p>
      </div>
    )
  }
}
//限制组件的props安全
Counter.propTypes = {
  //increment必须为fucntion,且必须存在
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  //counter必须为数字，且必须存在
};

export default Counter