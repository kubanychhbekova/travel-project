import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Login = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };
    return (
        <div id="login">
            <div className="container">
                <div className="login">
                    <div className="login--card">
                        <h1>Log in</h1>
                        <h5>Welcome!</h5>
                        <p>Log in to your account</p>
                        <div className="login--card__inputs">
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
                        <div className="login--card__remember">
                            <div className="login--card__remember--left">
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
                            <NavLink to={"/forgot"}>Forgot password</NavLink>
                        </div>
                        <div className="login--card__bottom">
                            <button>Log in</button>
                            <p>Already have an account ?{<NavLink to={"/signup"}>Sign up</NavLink>} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;