import React from 'react';
import { BrowserRouter as Router, Route,  Routes, Navigate } from 'react-router-dom';
import Signup from './Components/User_Credentials/Signup/Signup';
import Login from './Components/User_Credentials/Login/Login';
import Layout from './Components/Layout/Layout';
import MainPage from './Components/Main/MainPage';
import CompleteProfile from './Components/Profile/CompleteProfile';

function App() {
      const token= localStorage.getItem('token');
  return (
    <Router>
      <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/main' element={token ? <Layout><MainPage/></Layout> :     <Navigate to='/login' replace={true}/>}/> 
          <Route path='/profile' element={token ?<Layout><CompleteProfile/></Layout> :<Navigate to='/login' replace={true}/>}/> 
          <Route path='*' element={<Navigate to='/signup'/>}/>
      </Routes>
    </Router>
  );
}

export default App;
