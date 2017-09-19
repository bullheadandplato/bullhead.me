import React, {Component} from 'react';
import ReactDOM from 'react-dom'
class HelloReact extends Component {
    render() {
        return (
            <h1>Hello, My name is Osama Bin Omar and I don't like cars.</h1>
        )
    }
}

ReactDOM.render(<HelloReact/>, document.getElementById("root"));