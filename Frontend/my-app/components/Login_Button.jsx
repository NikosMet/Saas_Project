import React from 'react'

const Login_Button = (Username,Pasward) => {

  CheckUser = (Username,Pasward) => {

  }

  return (
    <button className="mt-10 rounded border border-black p-1" onClick={CheckUser(e)}>
    Login
  </button>
  )
}

export default Login_Button