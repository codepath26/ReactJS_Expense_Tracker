import React from 'react'
import { BrowserRouter as Router, Route,  Routes, Navigate } from 'react-router-dom';
import Signup from '../Components/User_Credentials/Signup/Signup';
import Login from '../Components/User_Credentials/Login/Login';
import Layout from '../Components/Layout/Layout';
import MainPage from '../Components/Main/MainPage';
import CompleteProfile from '../Components/Profile/CompleteProfile';
// import { useAuthContext } from '../Context/AuthContext';
import Forgotpass from '../Components/User_Credentials/ForgotPass/Forgotpass';
import { useSelector } from 'react-redux';

function RouterProvider() {
  // const {userIsLoggedIn}= useAuthContext();
  
  const  userIsLoggedIn = useSelector(state => state.auth.userIsLoggedIn)
  const state = useSelector(state => state);
  console.log(state)
  console.log("RouterProvider is called")
  console.log(userIsLoggedIn)

  return (
    <Router>
       
    <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={userIsLoggedIn ? <Layout><MainPage/></Layout> :     <Navigate to='/login' replace={true}/>}/> 
        <Route path='/profile' element={userIsLoggedIn ?<Layout><CompleteProfile/></Layout> :<Navigate to='/login' replace={true}/>}/> 
        <Route path='/resetPassword' element={<Forgotpass/>}/>
        <Route path='*' element={<Navigate to='/signup'/>}/>
    </Routes>
  </Router>
  )
}

export default RouterProvider;