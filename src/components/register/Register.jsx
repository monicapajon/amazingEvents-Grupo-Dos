import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import("../register/register.css");


const register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [user, setUSer] = useState("");
    const [age, setAge] = useState("");

    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const nameImputRef = useRef()
    const lastNameInputRef = useRef()
    const userInputRef = useRef()
    const ageInputRef = useRef()

    const navigate = useNavigate()
    const handleRegister = () => {

        axios.post("http://localhost:3000/api/register/", {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            name: nameImputRef.current.value,
            lastName: lastNameInputRef.current.value,
            user: userInputRef.current.value,
            age: ageInputRef.current.value
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                alert("Register completed successfully")
                navigate("/login")
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="register-container">
            <div className="register-content">
                <div className="title-register-form">
                    <h1>Register</h1>
                </div>
                <div className="form">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleRegister();
                    }
                    }>
                        <input
                            name="nombre"
                            className="input"
                            placeholder="name"
                            type={"text"}
                            ref={nameImputRef}
                        />
                        <input
                            name="apellido"
                            className="input"
                            placeholder="lastName"
                            type={"text"}
                            ref={lastNameInputRef}
                        />
                        <input
                            name="User"
                            className="input"
                            placeholder="User"
                            type={"number"}
                            ref={userInputRef}
                        />
                        <input
                            name="age"
                            className="input"
                            placeholder="date of birth"
                            type={"number"}
                            ref={ageInputRef}
                        />
                        <input
                            className="input"
                            name="email"
                            placeholder="Tu email"
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
                        <button
                            className="button-form-register"
                            type="submit"
                            value={"submit"}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default register