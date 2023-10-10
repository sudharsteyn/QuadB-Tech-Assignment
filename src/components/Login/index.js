import { Link } from "react-router-dom";

import "./index.css";

const Login = (props) => {
  const handleLogin = (e) => {
    e.preventDefault();
    const { history } = props;
    history.replace("/");
  };

  return (
    <div className="login-route">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input type="text" placeholder="Username or Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p>
          Don't have account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
