import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { collection  } from 'firebase/firestore';
import { doc, addDoc, serverTimestamp } from "firebase/firestore"; 
import "./feed.css";
import InputOption from './inputOption/input-option';
import PanoramaRoundedIcon from '@mui/icons-material/PanoramaRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import Post from './Post/post';
import { dataBase } from '../../firebase';
import { onSnapshot, query, orderBy } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Features/userSllice';
import FlipMove from 'react-flip-move';


export default function Feed() {

    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState<{id:string, data:any}[]>([]);
   

     

    useEffect(()=>{

    
    const postsCol = query(collection(dataBase, 'posts'), 
             orderBy("timestamp", 'desc')
              );
         
     onSnapshot(postsCol, (snapshot)=> setPosts(snapshot.docs.map((doc) => ({
         id: doc.id,
         data: doc.data(),
     }))));
    }, [])

    const sendPost =  async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const postsCol =  collection(dataBase, 'posts');
        const postRef = await addDoc(postsCol, {
            name:user.displayName,
            description:'Web Developer',
            message:input, 
            photoUrl:user.photoURL,
            timestamp: serverTimestamp(),
        })

        setInput('');
        
    }


  return (
    <div className='feed'>
        <div className="feed__input-container">
            <div className="feed__input">
                <Avatar src={user.photoURL}>{user.displayName[0].toUpperCase()} </Avatar>
                <form action="submit">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Post</button>
                </form>
            </div>
            <div className="feed__input-options">
                <InputOption Icon={PanoramaRoundedIcon} title="Photo" color="#70b5f9" />
                <InputOption Icon={SmartDisplayRoundedIcon} title="Video" color="#e7a33e" />
                <InputOption Icon={EventNoteRoundedIcon} title="Event" color="#e7a33e" />
                <InputOption Icon={NewspaperRoundedIcon} title="Write article" color="#7fc15e" />
            </div>
        </div>
            <FlipMove>

                  {
            posts.map(({id, data:{name, description, message , photoUrl}})=>(
                <Post
                key={id} 
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))
        } 


            </FlipMove>
      
        
    </div>
  )
}
