import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useState} from 'react';
const Signup = () => {
  let navigate=useNavigate();
    const [details,setdetails]=useState({name:"",email:"",password:"",location:""})
    const handlesubmit= async (event)=>{
        event.preventDefault();
        const response= await fetch("http://localhost:5001/api/createuser",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:details.name,email:details.email,password:details.password})
            }
        );
        const json=await response.json();
        console.log(json);
        if(!json.success){
            alert("invalid");
            console.log(json);
        }
        if(json.success===true){
          navigate('/')
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user',details.email);

        }
    }
    
  return (
    <div className="card mx-auto mt-5" style={{ maxWidth: '400px' }}>
      <div className="card-header">
      <div className='text-center mt-3'>
      <img src='./cbit logo.png' style={{ height: '80px', width: '80px' }} alt='cbit logo'/>
      </div>
        <h5 className="card-title text-center">Sign Up</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={details.name}
              onChange={(e) =>
                 setdetails({ ...details, [e.target.name]: e.target.value })}
            />
          </div>
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
              onChange={(e) => setdetails({ ...details, [e.target.name]: e.target.value })}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
              onChange={(e) => setdetails({ ...details, [e.target.name]: e.target.value })}
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={details.location}
              onChange={(e) => setdetails({ ...details, [e.target.name]: e.target.value })}
            />
          </div> */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
          <Link to="/login" className="mt-1 w-100 btn btn-danger">Have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
