import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
        watch,
        reset
    } = useForm({
        mode: "onBlur"
    })
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };
    return (
        <div id="login">
            <div className="container">
                <div className="login">
                    <div className="login--card">
                        <form action="">
                        <h1>Log in</h1>
                        <h5>Welcome!</h5>
                        <p>Log in to your account</p>
                        <div className="login--card__inputs">
                            <input type="email" placeholder= "Your E-mail"
                                   {...register('email', {
                                       required: "Email is required",
                                       pattern: {
                                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                           message: "Invalid email address",
                                       }
                                   })}
                            />
                            <div className="error">
                                {errors?.email &&
                                    <p>{errors?.email?.message || "Error!"}*</p>}
                            </div>
                            <input type={"password"} placeholder="Password"
                                   {...register('password', {
                                       required: "Password is required",
                                       minLength: {
                                           value: 6,
                                           message: "Password should be at least 6 characters long"
                                       }

                                   })}
                            />
                            <div className="error">{errors?.password &&
                                <p>{errors?.password?.message || "Error!"}*</p>}</div>
                            <input type={"password"} placeholder="Confirm password"

                                   {...register('confirmPassword', {
                                       required: "Please confirm your password",
                                       validate: value => value === watch('password') || "Passwords do not match"
                                   })}
                            />
                            <div className="error">
                                {errors?.confirmPassword &&
                                    <p>{errors?.confirmPassword?.message || "Error!"}*</p>}
                            </div>

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
                            <input type="submit" className="login--card__bottom--submit" value="Log in"/>
                            <p>Already have an account ?{<NavLink to={"/signup"}>Sign up</NavLink>} </p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;