import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../auth/firebase";
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import "./component.css";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, err] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("please enter your name");
    registerWithEmailAndPassword(name, email, password)
  }

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/countries')

  }, [user, loading, navigate]);

  return (
    <div className='register'>
      <div className='card-item'>
        <div>
          <label htmlFor="name">Enter your name</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
        </div>
        <div>
          <label htmlFor="email">Enter email address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Enter password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        </div>
        <div>
          <Button onClick={register}>Register</Button>
        </div>
        <div className='log-link'>
          Already have an account?
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;