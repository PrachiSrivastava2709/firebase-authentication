import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
        <div>Landing</div>
        <Link to={`/signup`}> Sign up </Link>
        <Link to={`/login`}> Login </Link>
    </>
  )
}

export default Landing