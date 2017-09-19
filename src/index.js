import React, {Component} from 'react';

class HelloReact extends Component {
    render() {
        return (
            <h1>Hello, My name is Osama Bin Omar and I don't like cars</h1>
        )
    }
}

React.render(<HelloReact/>, document.getElementById("root"));