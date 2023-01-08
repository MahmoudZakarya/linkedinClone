import { Avatar, PropTypes } from '@mui/material'
import React, {forwardRef, useRef} from 'react'
import InputOption from '../inputOption/input-option'
import './post.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


 const Post = forwardRef<any, any>(({name, description, message, photoUrl}:{
  name:string,
  description:string,
  message:string,
  photoUrl:string
}, ref) => {

  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
           
        </div>
         <div className="post__body">
              <p>{message}</p>
          </div>
          <div className="post__buttons">
              <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color='gray' />
              <InputOption Icon={ChatOutlinedIcon} title="Comment" color='gray' />
              <InputOption Icon={ShareOutlinedIcon} title="Share" color='gray' />
              <InputOption Icon={SendOutlinedIcon} title="Send" color='gray' />
          </div>
    </div>
  )
} 
);


export default Post;
