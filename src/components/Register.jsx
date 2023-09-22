import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../auth/firebase";
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

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
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <Button onClick={register}>Register</Button>
      <div>
        Already have an account?
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;