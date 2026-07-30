import { useState } from "react";

import "./Forms.css";

function PostJob() {

    const [job, setJob] = useState({
        company_id: "",
        job_title: "",
        salary: "",
        eligibility_cgpa: "",
        location: ""
    });

    const handleChange = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
        });
    };

    const handlePostJob = async () => {

        try {

            const response = await fetch("http://localhost:5000/company/postjob", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(job)
            });

            const data = await response.json();
            alert(data.message);

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="form-container">

            <h1>Post Job</h1>

            <input
                type="number"
                name="company_id"
                placeholder="Company ID"
                onChange={handleChange}
            />
            <br /><br />

            <input
                type="text"
                name="job_title"
                placeholder="Job Title"
                onChange={handleChange}
            />
            <br /><br />

            <input
                type="number"
                name="salary"
                placeholder="Salary"
                onChange={handleChange}
            />
            <br /><br />

            <input
                type="number"
                step="0.01"
                name="eligibility_cgpa"
                placeholder="Eligibility CGPA"
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

            <button onClick={handlePostJob}>
                Post Job
            </button>

        </div>
    );
}

export default PostJob;
