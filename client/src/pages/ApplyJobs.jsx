import { useState } from "react";

import "./Forms.css";

function ApplyJob() {

    const [application, setApplication] = useState({
        student_id: "",
        job_id: ""
    });

    const handleChange = (e) => {
        setApplication({
            ...application,
            [e.target.name]: e.target.value
        });
    };

    const handleApply = async () => {

        try {

            const response = await fetch("http://localhost:5000/student/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(application)
            });

            const data = await response.json();

            alert(data.message);

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className ="form-container">

            <h1>Apply for Job</h1>

            <input
                type="number"
                name="student_id"
                placeholder="Student ID"
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="number"
                name="job_id"
                placeholder="Job ID"
                onChange={handleChange}
            />

            <br /><br />

            <button onClick={handleApply}>
                Apply
            </button>

        </div>
    );
}

export default ApplyJob;