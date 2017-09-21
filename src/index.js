import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LeftCard from './LeftCard';
import styles from './index.css';

class HelloReact extends Component {
    render() {
        return (
            <div className={"root"}>
                <div id={'left'}><LeftCard/>
                </div>
                <div id={'right'}>
                    <h1>Hello, My name is Osama Bin Omar and I don't like cars.</h1>
                </div>
            </div>

        )
    }
}

export default HelloReact;
ReactDOM.render(<HelloReact/>, document.getElementById("root"));
