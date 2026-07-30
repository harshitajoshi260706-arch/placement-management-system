import "./Navbar.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Placement Management System</h2>

      <div className="nav-links">

        <button onClick={() => setPage("home")}>Home</button>

        <button onClick={() => setPage("studentRegister")}>
          Student Register
        </button>

        <button onClick={() => setPage("studentLogin")}>
          Student Login
        </button>

        <button onClick={() => setPage("companyRegister")}>
          Company Register
        </button>

        <button onClick={() => setPage("companyLogin")}>
          Company Login
        </button>

        <button onClick={() => setPage("postJob")}>
          Post Job
        </button>

        <button onClick={() => setPage("viewJobs")}>
          View Jobs
        </button>

        <button onClick={() => setPage("applyJob")}>
          Apply Job
        </button>

        <button onClick={() => setPage("viewApplications")}>
          Applications
        </button>

      </div>

    </nav>
  );
}

export default Navbar;