import React, {Component} from 'react';
import Avatar from 'react-avatar';

class LeftCard extends Component {
    render() {
        return (
            <div className={'leftCard'}>
                <div className={'leftDetails'}>
                    <Avatar skypeId={'m.osamabinomar@gmail.com'} size={100} round={true}/>
                </div>
            </div>
        );
    }
}

export default LeftCard;