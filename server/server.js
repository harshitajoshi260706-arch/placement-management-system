const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Harshi@2607",
    database: "placement_management"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

//Home route
app.get("/", (req, res) => {
    res.send("Backend Running");
});


//Student registration
app.post("/student/register", (req, res) => {

    const { name, email, password, phone, course, branch, cgpa, resume } = req.body;

    const sql = `
    INSERT INTO students
    (name, email, password, phone, course, branch, cgpa, resume)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, password, phone, course, branch, cgpa, resume],
        (err) => {

            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Registration Failed" });
            }

            res.json({ message: "Student Registered Successfully" });
        }
    );

});

//student login
app.post("/student/login", (req, res) => {

    console.log("Login API Hit");
    console.log(req.body);


    const { email, password } = req.body;

    const sql = "SELECT * FROM students WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {


        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Server Error" });
        }

        if (result.length > 0) {
            res.json({ message: "Login Successful" });
        } else {
            res.json({ message: "Invalid Email or Password" });
        }

    });

});

// Company Registration
app.post("/company/register", (req, res) => {

    const { company_name, email, password, hr_name, location } = req.body;

    const sql = `
    INSERT INTO companies
    (company_name, email, password, hr_name, location)
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [company_name, email, password, hr_name, location],
        (err) => {

            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Company Registration Failed"
                });
            }

            res.json({
                message: "Company Registered Successfully"
            });

        }
    );

});


// Company Login
app.post("/company/login", (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM companies WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Server Error"
            });
        }

        if (result.length > 0) {
            res.json({
                message: "Company Login Successful"
            });
        } else {
            res.json({
                message: "Invalid Email or Password"
            });
        }

    });

});

// Post Job
app.post("/company/postjob", (req, res) => {

    const {
        company_id,
        job_title,
        salary,
        eligibility_cgpa,
        location
    } = req.body;

    const sql = `
    INSERT INTO jobs
    (company_id, job_title, salary, eligibility_cgpa, location)
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [company_id, job_title, salary, eligibility_cgpa, location],
        (err) => {

            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Job Posting Failed"
                });
            }

            res.json({
                message: "Job Posted Successfully"
            });

        }
    );

});

// View All Jobs
app.get("/jobs", (req, res) => {

    const sql = "SELECT * FROM jobs";

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Failed to Fetch Jobs"
            });
        }

        res.json(result);

    });

});

// Apply for Job
app.post("/student/apply", (req, res) => {

    const { student_id, job_id } = req.body;

    const sql = `
    INSERT INTO applications
    (student_id, job_id, status)
    VALUES (?, ?, ?)
    `;

    db.query(sql, [student_id, job_id, "Pending"], (err) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Application Failed"
            });
        }

        res.json({
            message: "Applied Successfully"
        });

    });

});

// View Applications
app.get("/applications", (req, res) => {

    const sql = `
    SELECT
        a.application_id,
        s.name AS student_name,
        j.job_title,
        a.status
    FROM applications a
    JOIN students s ON a.student_id = s.student_id
    JOIN jobs j ON a.job_id = j.job_id
    `;

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Failed to Fetch Applications"
            });
        }

        res.json(result);

    });

});

app.post("/hello", (req, res) => {
    res.json({ message: "Hello API Working" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

