import React from 'react'

import { Avatar, IconButton } from '@mui/material'
import {MoreVert, SearchOutlined, AttachFile, InsertEmoticon, Mic} from '@mui/icons-material';

import './Chat.css';


const Chat = () => {
  return (
    <div className='chat'>
        <div className='chat__header'>

            <Avatar /> 

            <div className='chat__headerInfo'>
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>

            <div className='chat__headerRight'>
                <IconButton> <SearchOutlined /> </IconButton>
                <IconButton> <AttachFile /> </IconButton>
                <IconButton> <MoreVert /> </IconButton>
            </div>
        </div>

        <div className='chat__body'>
            <p className='chat__message'>
                <span className='chat__name'>Name</span>
                This is a message
                <span className='chat__timestamp'>timestamp</span>
            </p>

            <p className='chat__message chat__receiver'>
                <span className='chat__name'>Name</span>
                This is a message
                <span className='chat__timestamp'>timestamp</span>
            </p>
        </div>

        <div className='chat__footer'>
            
            <IconButton> <InsertEmoticon /> </IconButton>
            <AttachFile />

            <form>
                <input placeholder='Type a message' type='text' />
                <button type='submit'>Send a message</button>
            </form>
            <IconButton> <Mic /> </IconButton>
        </div>
    </div>
  )
}

export default Chat