import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CompleteProfile() {
  const [fullName , setFullName] = useState('');
  const [photo , setPhoto] = useState('');
  const navigate = useNavigate();
  const updateProfile = (e)=>{
    e.preventDefault();
  
    const updateUser = async(data)=>{
      try{
        const token = localStorage.getItem('token');
        const data ={
          displayName : fullName ,
          photoUrl	 : photo,
          idToken : token,
          returnSecureToken : true,
        }
        if(token){
          const response =await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
          data
          );
          console.log("profile response" ,response);
          navigate('/main');
        }
      }catch(err){
        console.log(err);
      }
    }
    updateUser();
  }
  return (
    <div className='w-100 vh-100 border border-danger d-flex justify-content-center'>
      <form className='w-50 mt-5' onSubmit={updateProfile}>
        <label className='form-label fw-bold' htmlFor="name">Full Name</label>
        <input className='form-control mb-4 border '  type="text" id='name'  value={fullName} onChange={(e)=>setFullName(e.target.value)} />
        <label className='form-label fw-bold' htmlFor="url">Profile Photo Url</label>
        <input  className='form-control mb-4 border ' type="text"  id='url' value={photo} onChange={(e)=>setPhoto(e.target.value)} />
        <button className='btn btn-success'>Update</button>
      </form>
      
    </div>
  )
}

export default CompleteProfile;
