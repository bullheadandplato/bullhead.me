import React, {Component} from 'react';
import Avatar from 'react-avatar';

class LeftCard extends Component {
    render() {
        return (
            <div className={'leftCard'}>
                <div className={'leftDetails'}>
                    <Avatar skypeId={'m.osamabinomar@gmail.com'} size={100} round={true}/>
                    <h4>Osama Bin Omar</h4>
                    <i className={"fa fa-github"} aria-hidden={"true"}/>
                </div>
            </div>
        );
    }
}

export default LeftCard;