import { useState } from "react";

import "./Forms.css";

function CompanyRegister() {

    const [company, setCompany] = useState({
        company_name: "",
        email: "",
        password: "",
        hr_name: "",
        location: ""
    });

    const handleChange = (e) => {
        setCompany({
            ...company,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {

        try {

            const response = await fetch("http://localhost:5000/company/register", {
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

            <h1>Company Registration</h1>

            <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                onChange={handleChange}
            />
            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <br /><br />

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <br /><br />

            <input
                type="text"
                name="hr_name"
                placeholder="HR Name"
                onChange={handleChange}
            />
            <br /><br />

            <input
                type="text"
                name="location"
                placeholder="Location"
                onChange={handleChange}
            />
            <br /><br />

            <button onClick={handleRegister}>
                Register
            </button>

        </div>
    );
}

export default CompanyRegister;