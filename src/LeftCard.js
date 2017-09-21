import React, {Component} from 'react';
import Avatar from 'react-avatar';

class LeftCard extends Component {
    render() {
        return (
            <div className={'leftCard'}>
                <div className={'leftDetails'}>
                    <Avatar
                        src={"https://avatars0.githubusercontent.com/u/15232745?v=4&s=400&u=8114e15bc03228a9c0f04ce4c092cb703813ba60"}
                        size={70} round={true}/>
                    <h3 id={"name"}>Osama Bin Omar (bullhead)</h3>
                    <h6 id={"now"}>Swift & React & Kotlin</h6>
                    <div className={"icons"}>
                        <a href={'https://github.com/mosamabinomar'} target={"_blank"}>
                            <i className={"fa fa-github fa-lg"} aria-hidden={"true"}/>
                        </a>
                        <a href={'https://twitter.com/bullhead_void'} target={"_blank"}>
                            <i className={"fa fa-twitter fa-lg"} aria-hidden={"true"}/>
                        </a>
                        <a href={'https://www.linkedin.com/in/osama-bin-omar-a2124b144/'} target={"_blank"}>
                            <i className={"fa fa-linkedin-square fa-lg"} aria-hidden={"true"}/>
                        </a>
                        <a href={'mailto:m.osamabinomar@gmail.com'}>
                            <i className={"fa fa-envelope fa-lg"} aria-hidden={"true"}/>
                        </a>

                    </div>
                </div>
            </div>
        );
    }
}

export default LeftCard;