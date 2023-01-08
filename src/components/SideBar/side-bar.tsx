import { Avatar } from '@mui/material'
import React from 'react'
import './side-bar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSllice'
export default function SideBar() {

    const user = useSelector(selectUser);

    const recentItem = (topic:string) => (
        <div className="sidebar__recentitem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            < Avatar src={user.photoURL} className='sidebar__avatar' />
            <h2 className="sidebar__name">{user.displayName}</h2>
            <h4 className="sidebar__bio">Front-End & Flutter Developer</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p><strong>4,984</strong></p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p>
                   <strong>35,465</strong></p>
            </div>
        </div>
        
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('ReactJs')}
            {recentItem('TypeScript')}
            {recentItem('You Better Hire Me')}
            {recentItem('Flutter')}
            {recentItem('Node.Js')}
        </div>

    </div>
  )
}
