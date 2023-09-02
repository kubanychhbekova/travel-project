import React, {useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getLetter, getUser, IsAuth} from "../../../store/registerSlice";


const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [birthDay, setBirthDay] = useState("")
    const [confirm, setConfirm] = useState("")
    const [tel, setTel] = useState("")
    const [disable, setDisable] = useState(true)
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };
    const dispatch = useDispatch()
    const {user, isAuth,firstLetter} = useSelector(s => s.user)
    const requestData = {
        first_name: name,
        last_name: lastName,
        password: password,
        email: email,
        username: name,
        phone_number: tel,
        date_of_birth: birthDay
    };

    useEffect(() => {
        setDisable(!email || !password || !name || !lastName || !tel || !birthDay || !confirm);
    }, [email, password, name, lastName, tel, birthDay, confirm])



    const handleLogin = async () => {
        try {
            if (!email || !password) {
                alert("Заполните все обязательные поля.");
                return;
            }
            const response = await axios.post(
                "http://34.207.195.167/api/v1/accounts/users/",
                requestData
            );
            dispatch(getUser(response.data))
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/");

            dispatch(IsAuth(true))

        } catch (error) {
            console.error("Ошибка при выполнении запроса:", error);
        }
    };


    return (
        <div id="register">
            <div className="register">
                <div className="container">
                    <div className="register--card">
                        <div>
                            <h1>Sign up</h1>
                            <h6>Create an account</h6>
                            <div className="register--card__inputs">
                                <input type="email" placeholder="Your E-mail"
                                       onChange={(e) => {
                                           setEmail(e.target.value)
                                       }}
                                       value={email}

                                />
                                <input type={"password"} placeholder="Password"
                                       onChange={(e) => {
                                           setPassword(e.target.value)
                                       }}
                                       value={password}

                                />
                                <input type={"password"} placeholder="Confirm password"
                                       onChange={(e) => {
                                           setConfirm(e.target.value)

                                       }}
                                       value={confirm}
                                />


                            </div>
                            <div className="register--card__data">
                                <div>
                                    <label>
                                        <p>Name <span>*</span></p>
                                        <input onChange={(e) => {
                                            setName(e.target.value)

                                        }}
                                               value={name}

                                        />
                                    </label>
                                </div>
                                <div>

                                    <label>

                                        <p>Surname <span>*</span></p>
                                        <input
                                            onChange={(e) => {
                                                setLastName(e.target.value)
                                            }}
                                            value={lastName}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>

                                        <p>Phone number <span>*</span></p>
                                        <input type={"tel"}
                                               placeholder="+996"
                                               onChange={(e) => {
                                                   setTel(e.target.value)
                                               }}
                                               value={tel}
                                        />
                                    </label>
                                </div>
                                <div>

                                    <label>

                                        <p>Birth date <span>*</span></p>
                                        <input
                                            placeholder="yyyy-mm-dd"
                                            onChange={(e) => {
                                                setBirthDay(e.target.value)
                                            }}
                                            value={birthDay}
                                        />
                                    </label>

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
                            <button onClick={() => {
                                handleLogin()
                            }}
                                    className="register--card__submit"
                                    style={{
                                        background: disable ? "#8080805e" : ""
                                    }}
                                    disabled={disable}
                            >Sign Up
                            </button>
                            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;