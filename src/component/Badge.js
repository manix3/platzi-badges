import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component{
    render(){

        const props = this.props;

        return <div className="badge">
            <div className="badge_header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>

            <div className="badge_section-name">
                <img className="badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                <h1>{props.firstName} <br/> {props.lastName} </h1>
            </div>

            <div className="badge_section-info">
                <h3>{props.jobTitle}</h3>
                <div>@{props.twitter}</div>
            </div>

            <div className="badge_footer">
                <p>#PlatziConf</p>
            </div>
        </div>
    }
}
export default Badge;