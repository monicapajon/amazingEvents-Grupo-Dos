import React, { useEffect, useRef, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const navigate = useNavigate()
    const handleSignIn = () => {
        axios.post("http://localhost:3000/user/login", {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                console.log(response.data)
                navigate("/")
                
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/")
        }
    }, [])

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="title-login-form">
                    <h1>Login</h1>
                </div>
                <div className="form">
                    <form
                         onSubmit={(e) => {
                            e.preventDefault();
                            handleSignIn();
                        }}
                    >
                        <input
                            className="input"
                            name="email"
                            placeholder="email"
                            type={"email"}
                            ref={emailInputRef}
                        />
                        <input
                            className="input"
                            name="password"
                            placeholder="password"
                            type={"password"}
                            ref={passwordInputRef}
                        />

                        <div className="div-button">
                            <button
                                className="button-form-login"
                                type="submit"
                                value={"submit"}
                                
                            >
                                Login
                            </button>
                            <Link to="/forgot-password" className="forgotPassword">forgot password?</Link>
                            <br />
                            <Link to="/register">Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
