import React from 'react';
import {Link} from 'react-router-dom';

import fondo from '../images/astronaut.svg';
import Logo from '../images/platziconf-logo.svg';
import '../component/styles/HomePage.css';

class HomePage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="Home">
                    <div className="container">
                        <div className="row">
                            <div className="Home__col col-12 col-md-4">
                                <img 
                                src={Logo}
                                alt="Logo platziconf"
                                className="img-fluid mb-2"
                                />

                                <h1>Manejo de Badges</h1>
                                <Link className="btn btn-primary" to="/badges">
                                Comenzar
                                </Link>
                            </div>

                            <div className="Home__col d-none d-md-block col-md-8">
                                <img 
                                src={fondo}
                                alt="Astronauts"
                                className="img-fluid p-4"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default HomePage;