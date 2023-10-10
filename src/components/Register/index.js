import { Link } from "react-router-dom";

import "./index.css";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-route">
      <form onSubmit={handleRegister}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
        <p>
          Already have account! <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
