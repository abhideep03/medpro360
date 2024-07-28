import React from 'react'
import Login from './login';
import Register from './register';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div>home</div>
    <Link to='login'>Login</Link>
    <Link to='register'>Register</Link>
    </>
  )
}

export default Home;