import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/feed';
import Header from './components/Header/header';
import Login from './components/Login/login';
import SideBar from './components/SideBar/side-bar';
import { login, logout, selectUser } from './Features/userSllice';
import { auth } from './firebase';
import { Widgets } from './components/Widgets/widgets';

function App() {
const user = useSelector(selectUser); 
  const dispatch = useDispatch(); 

useEffect(()=>{
  auth.onAuthStateChanged((userCredential)=> {
    if(userCredential){
      // User has logged in 
      dispatch(login({
          email: userCredential.email,
          uid: userCredential.uid,
          displayName: userCredential.displayName,
          photoURL: userCredential.photoURL
        }));

    } else {
      // User has logged out
      dispatch(logout());
    }
  })
}, [])
  return (
    <div className="App">


      {!user ?( <Login/>) : ( 
        <><Header /><div className="app-body">
          <SideBar />
          <Feed />
          <Widgets/>
        </div></>
      )}

     

    </div>
  );
}

export default App;
