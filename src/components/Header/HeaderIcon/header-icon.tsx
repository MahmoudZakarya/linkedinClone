import { Avatar } from '@mui/material'
import React from 'react'
import './header-icon.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Features/userSllice';

export default function HeaderIcon({Icon, title, avatar,isAvatar,  onClick }: {Icon?:any , title:string , avatar?:string, isAvatar?:boolean, onClick?:any}) {

    const user = useSelector(selectUser);

  return (
    
    <div className='header-icon'>
      { Icon && (<Icon className='header-icon__icon'/>)}
      {isAvatar && (
        <Avatar className='header-icon__avatar' src={avatar} onClick={onClick} >{user.displayName[0].toUpperCase()}</Avatar>
      )}
      <h3 className="header-icon__title">{title}</h3>
    </div>
  )
}
