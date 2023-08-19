import React from 'react';
import {NavLink} from "react-router-dom";

const Forgot = () => {
    return (
        <div id="forgot">
            <div className="container">
                <div className="forgot">
                    <div className="forgot--card">
                        <h1>Forgot password</h1>
                        <p>Enter your email for the verification process, we will send code to your email</p>
                        <div className="forgot--card__inputs">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your E-mail"
                            />
                        </div>
                        <NavLink to="/login">Back to login</NavLink>
                        <button>Continue</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Forgot;