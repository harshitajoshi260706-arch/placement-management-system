import "./Home.css";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <h1>Placement Management System</h1>

        <p>
          A web-based application to simplify campus placement activities for
          students, companies, and administrators.
        </p>

      </div>

      <div className="cards">

        <div className="card">
          <h2>👨‍🎓 Student</h2>
          <p>Register, Login, View Jobs and Apply.</p>
        </div>

        <div className="card">
          <h2>🏢 Company</h2>
          <p>Register, Login and Post Jobs.</p>
        </div>

        <div className="card">
          <h2>💼 Jobs</h2>
          <p>Manage jobs and placement opportunities.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;