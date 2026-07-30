import { useEffect, useState } from "react";

import "../Cards.css";

function ViewApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {

        const response = await fetch("http://localhost:5000/applications");
        const data = await response.json();

        setApplications(data);
    };

    return (
        <div className="card-container">

            <h1>Applications</h1>

            {applications.map((app) => (

                <div className="job-card" key={app.application_id}>

                    <h3>{app.student_name}</h3>

                    <p><strong>Job : </strong>{app.job_title}</p>

                    <p><strong>Status : </strong>{app.status}</p>



                </div>

            ))}

        </div>
    );
}

export default ViewApplications;