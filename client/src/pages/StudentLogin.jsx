import { useState } from "react";

import "./Forms.css";

function StudentLogin() {

    const [student, setStudent] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {
        console.log("Login button clicked");

        try {

            const response = await fetch("https://placement-management-system-4d6n.onrender.com/student/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });

            console.log(response.status);

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="form-container">
            <h1>Student Login</h1>

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
            />
            <br /><br />

            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
            />
            <br /><br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default StudentLogin;
