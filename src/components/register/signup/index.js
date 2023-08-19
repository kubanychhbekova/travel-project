import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";

const SignUp = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const navigate = useNavigate();


    return (
        <div id="register">
            <div className="register">
                <div className="container">
                    <div className="register--card">
                        <h1>Sign up</h1>
                        <h6>Create an account</h6>
                        <div className="register--card__inputs">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your E-mail"

                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"

                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"

                            />
                        </div>
                        <div className="register--card__data">
                            <div>
                                <p>Name <span>*</span></p>
                                <input
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div>
                                <p>Surname <span>*</span></p>
                                <input
                                    type="text"
                                    name="surname"

                                />
                            </div>
                            <div>
                                <p>Phone number <span>*</span></p>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="+996"

                                />
                            </div>
                            <div>
                                <p>Birth date <span>*</span></p>
                                <input
                                    type="date"
                                    name="birthDate"
                                    className="register--card__data--birth"

                                />
                            </div>
                        </div>
                        <div className="register--card__remember">
                            <div className={`theme-toggle ${darkTheme ? 'dark' : ''}`}>
                                <input
                                    type="checkbox"
                                    id="themeToggle"
                                    className="toggle-input"
                                    onChange={toggleTheme}
                                />
                                <label htmlFor="themeToggle" className="toggle-label">
                                    <div className="toggle-icon"></div>
                                </label>
                            </div>
                            <p>Remember me</p>
                        </div>
                        <button  onClick={()=>{
                            navigate("/digit")
                        }}
                        >
                            Sign Up
                        </button>
                        <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;