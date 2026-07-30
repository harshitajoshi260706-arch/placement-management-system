


// /*for importing css in react*/
// import "./App.css";
// /*importing home ,footer,navbar,studentlogin,adminlogin,companylogin in react*/
// import Home from "./pages/Home";
// import StudentRegister from "./pages/StudentRegister";
// import StudentLogin from "./pages/StudentLogin";
// import CompanyRegister from "./pages/CompanyRegister";
// import CompanyLogin from "./pages/CompanyLogin";
// import AdminLogin from "./pages/AdminLogin";
// import PostJob from "./pages/PostJob";
// import ViewJobs from "./pages/ViewJobs";
// import ApplyJobs from "./pages/ApplyJobs";
// import ViewApplications from "./pages/ViewApplications";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <StudentLogin />
//       <StudentRegister />
//       <CompanyRegister />
//       <CompanyLogin />
//       <AdminLogin />
//       <PostJob />
//       <ViewJobs />
//       <ApplyJobs />
//       <ViewApplications />
//       <Footer />
//     </div>

//   );
// }

// export default App;






import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Navbar.css";
import "./components/Footer.css";

import Home from "./pages/Home";
import StudentRegister from "./pages/StudentRegister";
import StudentLogin from "./pages/StudentLogin";
import CompanyRegister from "./pages/CompanyRegister";
import CompanyLogin from "./pages/CompanyLogin";
import PostJob from "./pages/PostJob";
import ViewJobs from "./pages/ViewJobs";
import ApplyJob from "./pages/ApplyJobs";
import ViewApplications from "./pages/ViewApplications";

function App() {

  const [page, setPage] = useState("home");

  return (
    <>

      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "studentRegister" && <StudentRegister />}
      {page === "studentLogin" && <StudentLogin />}
      {page === "companyRegister" && <CompanyRegister />}
      {page === "companyLogin" && <CompanyLogin />}
      {page === "postJob" && <PostJob />}
      {page === "viewJobs" && <ViewJobs />}
      {page === "applyJob" && <ApplyJob />}
      {page === "viewApplications" && <ViewApplications />}

      <Footer />

    </>
  );
}

export default App;