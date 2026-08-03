import { useState } from "react";

import "./Forms.css";

function StudentRegister() {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        course: "",
        branch: "",
        cgpa: "",
        resume: ""
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {

        console.log("Register button clicked");

        const response = await fetch("https://placement-management-system-4d6n.onrender.com/student/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const data = await response.json();
        alert(data.message);
    };

    return (
        <div className="form-container">
            <h1>Student Registration</h1>

            <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} />
            <br /><br />

            <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} />
            <br /><br />

            <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
            <br /><br />

            <input type="text" name="phone" placeholder="Enter Phone" onChange={handleChange} />
            <br /><br />

            <input type="text" name="course" placeholder="Enter Course" onChange={handleChange} />
            <br /><br />

            <input type="text" name="branch" placeholder="Enter Branch" onChange={handleChange} />
            <br /><br />

            <input type="text" name="cgpa" placeholder="Enter CGPA" onChange={handleChange} />
            <br /><br />

            <input type="text" name="resume" placeholder="Resume Link" onChange={handleChange} />
            <br /><br />

            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default StudentRegister;
