import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const [details, setDetails] = useState({ email: '', password: '' });
  const nav=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: details.email, password: details.password })
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Invalid credentials");
        localStorage.setItem('isLoggedIn', 'false');
      }
      if(json.success===true){
        nav("/");
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user',details.email);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    
  };

  return (
    <div className="card mx-auto mt-5" style={{ maxWidth: '400px' }}>
      <div className="card-header ">
        <div className='text-center mt-3'>
      <img src='./cbit logo.png' style={{ height: '80px', width: '80px' }} alt='cbit logo'/>
      </div>
        <h5 className="card-title text-center">Login</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Roll No.
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={details.email}
              onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={details.password}
              onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
          <Link to="/createuser" className="mt-1 w-100 btn btn-danger">New User?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
