import React from 'react';
import { useDispatch } from 'react-redux';
import EmailSignup from "./emailSignup";
// import { connect } from 'react-redux';

const Hero = ({backgroundImage, heroTitle, heroCaption}) => {
    const dispatch = useDispatch();

    return(
        <div className="hero">
            {/* <div className="hero-background"></div> */}
            <div className="hero-content-container">
                <img className="hero-logo"src="brex-travel-logo.svg" />
                <h1 className="hero-title" tabindex="0">{heroTitle}</h1>
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