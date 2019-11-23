import React from 'react';
import { useDispatch } from 'react-redux';
import { userSearch, updateHandle } from '../actions/twitterFeedAction';
import EmailSignup from "./emailSignup";
// import { connect } from 'react-redux';

const Hero = ({backgroundImage, heroTitle, heroCaption}) => {
    const [ searchInput, setSearchInput ] = React.useState("");
    const dispatch = useDispatch();

    return(
        <div className="hero">
            <div className="hero-background"></div>
            <div className="hero-content-container">
                <img className="hero-logo"src="brex-travel-logo.svg" />
                <h1 className="hero-title">{heroTitle}</h1>
                <EmailSignup />
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return({
//     })    
// }

export default Hero;