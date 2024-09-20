import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: formData.email,
            password: formData.password
        };

        if (!data.email || !data.password) {
            alert("Please fill in both fields.");
        } else {
            fetch("http://localhost:8080/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Server returned status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    alert("Login successful!");
                    localStorage.setItem("token", data.token); 
                    localStorage.setItem("role", data.role);   
                    navigate("/UserHome");
                })

                .catch(error => {
                    console.error("Error:", error);
                    alert("Invalid email or password. Please try again.");
                });
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2 className="login-heading">Login</h2>
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    <Link to='/UserSignup'>User Signup</Link>
                    <input type="submit" className="login-btn" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
