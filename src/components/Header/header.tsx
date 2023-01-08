import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './header.css';
import HeaderIcon from './HeaderIcon/header-icon';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logout, selectUser } from '../../Features/userSllice';
export default function Header() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

   const logOut = ()=>{
    auth.signOut(); 
    dispatch(logout());
   }

  return (
    

      <div className="header">
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
            <div className="header__search">

               <SearchIcon/>  
                <input placeholder='Search' type="text" />
            </div>
        </div>

        <div className="header__right">

          <HeaderIcon Icon={HouseRoundedIcon} title="Home"/>
          <HeaderIcon Icon={PeopleAltRoundedIcon} title="My Network"/>
          <HeaderIcon Icon={BusinessCenterRoundedIcon} title="Jobs"/>
          <HeaderIcon Icon={InsertCommentRoundedIcon} title="Messaging"/>
          <HeaderIcon Icon={NotificationsRoundedIcon} title="Notifications"/>
          <HeaderIcon avatar={user.photoURL } isAvatar={true}
           title="Sign Out"
           onClick={logOut}
           />


 


        </div>
        </div>
   
  )
}
