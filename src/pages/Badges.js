import React from 'react';
import BadgesList from '../component/BadgesList';
import logo from "../images/badge-header.svg";
import '../component/styles/Badges.css';
import { Link } from 'react-router-dom';

class Badges extends React.Component{
  constructor(props) {
    super(props)
    console.log("1. Constructor")
    this.state = {
        loading: true,
        error: null,
        data: {
          results: [],
        }
    };
  };
    

    componentDidMount(){
      this.timeoutId = setTimeout( () => this.fetchCharacters(), 1000);
      console.log("3. ComponentDid")
    }
    
    fetchCharacters = async () => {
      this.setState({ loading: true, error: null })


      try{
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=`
          ); 
          const data = await response.json()
      this.setState({
        loading: false,
        data: data
      });
      } catch(error){
        this.setState({
          loading: false,
          error: error,
        })
      }
      
    }
    
    componentDidUpdate(prevProps, prevState){
      console.log("5. ComponentDidUpdatea");
      console.log({prevProps: prevProps, prevState: prevState});
      
      console.log({props: this.props, state: this.state});
    }

    componentWillUnmount(){
      console.log("6. componentWillUnmount");
      // clearTimeout(this.timeoutId);
    }

    render(){
      console.log("2. Render")
        return (
          <React.Fragment>

            <div className="Badges">
              <div className="Badges__hero">
                <div className="Badges__container">
                  <img className="Badges_conf-logo" src={logo} alt="" />
                </div>
              </div>
            </div>

            <div className="Badges__container">
              <div className="Badges__buttons">
                <Link to="/badgesnew" className="btn btn-primary">
                    Nuevo Badge
                </Link>
              </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                    <BadgesList badges={this.state.data} onClick={this.fetchCharacters()} loader={this.state.loading}/>

                    </div>
                </div>

            </div>
          </React.Fragment>
        );
    }
}

export default Badges;