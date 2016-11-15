import React from 'react';

class AppleItem extends React.Component {


    render() {

        let { state, actions } = this.props;

        if (state.isEaten) return null;

        return (
            <div className="appleItem">
                <div className="apple"></div>
                <div className="info">
                    <div className="name">红苹果 - {state.id}号</div>
                    <div className="weight">{state.weight}克</div>
                </div>
                <div className="btn-div"><button onClick={() => actions.eatApple(state.id) }>吃掉</button></div>
            </div>
        );

    }


}

export default AppleItem;