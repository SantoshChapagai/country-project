import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, loginWithEmailAndPassword } from '../auth/firebase';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, err] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/countries')

  }, [user, loading, navigate]);

  return (
    <div className='login'>
      <div className='card'>
        <div>
          <label for="email">Enter email address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        </div>
        <div>
          <Button onClick={() => loginWithEmailAndPassword(email, password)}>Login</Button>
        </div>
        <div>
          Don't have an account
          <Link to="register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;