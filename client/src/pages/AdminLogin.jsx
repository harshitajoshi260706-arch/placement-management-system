function AdminLogin() {
  return (
    <div>
      <h1>Admin Login</h1>

      <label>Admin ID</label>
      <br />
      <input type="text" placeholder="Enter Admin ID" />

      <br /><br />

      <label>Password</label>
      <br />
      <input type="password" placeholder="Enter Password" />

      <br /><br />

      <button>Login</button>
    </div>
  );
}

export default AdminLogin;