import React from 'react';

class FirstPage extends React.Component{
    render(){
        return(
            <div>
                <li><a href="/basket">Basket</a></li>
                <li><a href="/app">App</a></li>
                {this.props.children}
            </div>
        )
    }
}

export default FirstPage;