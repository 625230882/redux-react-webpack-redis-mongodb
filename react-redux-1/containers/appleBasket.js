import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppleItem from '../components/AppleItem';
import actions from '../actions/appleActions';

class AppleBasket extends React.Component {

    render() {
        //console.log(11111)
        let { state, actions} = this.props;
        
        return (
            
            <div className = "appleBusket">
                <div className="appleList">
                    { state.apples ?
                        state.apples.map(apple =>
                        <AppleItem
                            key={apple.id}
                            state ={apple}
                            actions={{eatApple: actions.eatApple}}
                        />
                    ) : null 
                }
                </div>

                <div className="btn-div">
                    <button onClick={actions.pickApple}>摘苹果</button>
                </div>

                <div className="btn-div">
                    <button onClick={actions.addApple}>add-to-db</button>
                </div>
          </div>
       );
    }
}

function selectState(state) {
    //console.log(state)
    return {
        state: state.appleBasket
    }
}

function buildActionDispatcher(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(selectState, buildActionDispatcher)(AppleBasket);