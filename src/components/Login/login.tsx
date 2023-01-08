import React, { useState } from 'react'
import './login.css'
import {auth} from '../../firebase'
import { Alert } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../Features/userSllice';


export default function Login() {


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [picUrl, setPicUrl] = useState("");
  const dispatch = useDispatch(); 
  

  const loginToApp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL
      }))
    }).catch((error)=>alert(error.message));

  }

  const register = () => {
    if(!name) {
      return alert("Please Enter a Full Name");

    }

    createUserWithEmailAndPassword(auth , email , password).then((userCredential)=> {
      updateProfile(userCredential.user, {
        displayName: name , 
        photoURL : picUrl
      }).then(() => {
        dispatch(login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL
        }))
      })
    }).catch((error)=>alert(error.message))
    
    

  }

  return (
    <div className='login'>
      <div className="login__header">
          <img src="LinkedIn-Logo.wine.svg"  alt="" />
      </div>
      <div className="login__body">
      <div className="login__formContainer">
        <div className="login___title">
          <h3>Log In </h3>
          <h6>or Register If Your New To LinkedIn</h6>
        </div>

        <div className="login__formWrapper">
          <form className='login__form' action="submit">

              <input
               value={name} onChange={e => setName(e.target.value)}
               type="text" placeholder='Full Name (Leave empty if already a user)' />


              <input 
              value={picUrl} onChange={e => setPicUrl(e.target.value)}
              type="text" placeholder='Profile Picture URL (Optional)' />


              <input
               value={email} onChange={e => setEmail(e.target.value)}
              type="email" placeholder='Email Address' />


              <input 
               value={password} onChange={e => setPassword(e.target.value)}
               type="password" placeholder='Password' />


              <button type='submit' onClick={loginToApp}>Sign In</button>

          </form>
          <div className='registerNow'>
          <p>Not a Member ?  
            <span className="login__register" onClick={register}>  Resgister NOW</span>
          </p></div>
        </div>
      </div>
      </div>
    </div>
  )
}
