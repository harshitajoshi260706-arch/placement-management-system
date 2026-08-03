import { useEffect, useState } from "react";

import "../Cards.css";

function ViewJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {

        const response = await fetch("https://placement-management-system-4d6n.onrender.com/jobs");
        const data = await response.json();

        setJobs(data);

    };

    return (
        <div className="card-container">

            <h1>Available Jobs</h1>

            {
                jobs.map((job) => (

                    <div className="job-card" key={job.job_id}>

                        <h3>{job.job_title}</h3>

                        <p><strong>Company ID : </strong>{job.company_id}</p>

                        <p><strong>Salary : </strong>{job.salary}</p>

                        <p><strong> Eligibility CGPA :</strong> {job.eligibility_cgpa}</p>

                        <p><strong>Location :</strong> {job.location}</p>

                        <button>Apply Now </button>


                    </div>

                ))
            }

        </div>
    );

}

export default ViewJobs;
