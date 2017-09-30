import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LeftCard from './LeftCard';
import styles from './index.css';
import RightCard from './RightCard';

class HelloReact extends Component {
    render() {
        return (
            <div className={"root"}>
                <div id={'left'}><LeftCard/>
                </div>
                <div id={'right'}>
                    <RightCard/>
                </div>
            </div>

        )
    }
}

export default HelloReact;
ReactDOM.render(<HelloReact/>, document.getElementById("root"));
