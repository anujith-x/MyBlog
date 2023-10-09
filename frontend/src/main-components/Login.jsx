import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  const submitDetails = async () => {
    const data = {
      email,
      password
    }
    try{
      let response = await axios.post('http://localhost:4999/login', data)
      if(response.data.success){
        console.log(response.data);
        navigate('/profile')
      }else {
        // navigate('/login')
        return (
          <Link to="/login">Go to Login</Link>
        );
        //Work needed in the case: credentials are false
        //Work needed on both frontend and backend
      }
    }catch(err){
      console.log(err);
    }
    
    
  }

  return (
    <div>
      <h1>Login Page</h1>

      <div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={submitDetails}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
