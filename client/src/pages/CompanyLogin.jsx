import { useState } from "react";

import "./Forms.css";

function CompanyLogin() {

    const [company, setCompany] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setCompany({
            ...company,
            [e.target.name]: e.target.value
        });
    };
    const handleLogin = async () => {

        console.log("Company Login Button Clicked");

        try {

            const response = await fetch("http://localhost:5000/company/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(company)
            });
            const data = await response.json();

            alert(data.message);

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="form-container">

            <h1>Company Login</h1>
            <label>Email</label>
            <br />

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
            />

            <br /><br />
            <label>Password</label>
            <br />

            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
            />

            <br /><br />
            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default CompanyLogin; 

