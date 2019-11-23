import React from 'react';
import { useDispatch } from 'react-redux';
import { userSearch, updateHandle } from '../actions/twitterFeedAction';
// import { connect } from 'react-redux';

const EmailSignup = () => {
    const [ emailInput, setEmailInput ] = React.useState("");
    const dispatch = useDispatch();

    return(
        <div className="email-signup">
            <div className="email-input-container">
                <input 
                    className="email-input" 
                    placeholder="Email address"
                    value={emailInput} 
                    onChange={(e) => {
                        setEmailInput(e.target.value)
                }}></input>
                <button className="email-signup-button" onClick={() => {
                    //dispatch(searchMovies(searchInput))
                    //dispatch(updateHandle(searchInput))
                    //dispatch(userSearch(searchInput))
                    setEmailInput("")
                }}>SIGN UP</button>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return({
//     })    
// }

export default EmailSignup;