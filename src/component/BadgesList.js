import React from 'react';
import '../component/styles/BadgesList.css';
import Loader from './Loader';


class BadgesList extends React.Component{
    
    render(){
        return (
        <React.Fragment>

            <ul className="BadgesList">
                {this.props.badges.results.map(badge => {
                    return (
                        <ul key={badge.id}>
                        <div className="BadgesListItem" >
                            <img className="BadgesListItem__avatar" src={badge.image}/>
                            <div className="BadgesRowItem">
                                    <span className="font-weight-bold">{badge.name}</span>
                                    <span className="font-weight-light"><a href="/">{badge.gender}</a></span>
                                    <span className="font-weight-bold">{badge.id}</span>
                            </div>                    
                        </div>
                    </ul>
                    );
                })}
            </ul>
            {this.props.loader &&(
                <div className="loader">
                <Loader/>
                </div>
            )}

            {!this.props.loader &&(
                <button onClick=""></button>
            )}

        </React.Fragment>    
        )
    }
}

export default BadgesList;