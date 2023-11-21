import React from 'react'
import { createPortal } from 'react-dom'
import LoginModal from '../Overlays/LoginModal';

function Login(props) {

  const portalElement = document.getElementById('overlays');
  return (
    <>

     {
      createPortal(<LoginModal onclose={props.onClose}/>,portalElement)
     } 
    </>
  )
}

export default Login;
