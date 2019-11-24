import React from 'react';
import axios from 'axios';

const EmailSignup = () => {
    const [ emailInput, setEmailInput ] = React.useState("");
    const [ showError, setShowError ] = React.useState(false);
    const [ showSuccess, setShowSuccess ] = React.useState(false);


    const post_signup = () => {
        const body = {
            email: emailInput
          };
          axios
            .post("/signup", body)
            .then(res => {
              console.log(res);
              if (res.data.status === "ok") {
                console.log("valid")
                setShowSuccess(true)
              } else {
                console.log("also valid")
                setShowError(true)
              }
              // document.cookie = "username=username"; //set cookies with key/value pairs
              // document.cookie = "password=password"; //set cookies with key/value pairs
              console.log(res);
            })
            .catch((err) => {
                console.log(err)
                setShowError(true)
            });
    };

    const onFormSubmit = e => {
        e.preventDefault()
        post_signup()
        setEmailInput("")
        setShowSuccess(false)
        setShowError(false)
    }

    return(
        <div className="email-signup">
            <form className="email-input-container" onSubmit={onFormSubmit}>
                <input 
                    className="email-input"
                    aria-describedby="signup-error"
                    placeholder="Email address"
                    value={emailInput} 
                    onChange={(e) => {
                        setEmailInput(e.target.value)
                }}></input>
                <button 
                    type="submit"
                    className="email-signup-button"
                    id="email-signup-button" 
                    aria-label="submit email" 
                >SIGN UP</button>
            </form>
            {showError && 
                <div className="email-signup-error" id="signup-error">
                    <p>Please enter a valid email address</p>
                </div>   
            }
            {showSuccess && 
                <div className="email-signup-success" id="signup-success">
                    <p>Thanks for signing up!</p>
                </div>   
            }
        </div>
    )
}

export default EmailSignup;