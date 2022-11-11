import React from 'react'

import {DonutLarge, MoreVert, Chat, SearchOutlined} from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/material';

import './Sidebar.css'
import {SidebarChat} from '../index'

function Sidebar() {
  return (
    <div className='sidebar'>

        <div className='sidebar__header'>

            <Avatar src='https://avatars.githubusercontent.com/u/27841940?v=4' />

            <div className='sidebar__headerRight'>
                <IconButton> <DonutLarge /> </IconButton>
                <IconButton> <Chat /> </IconButton>
                <IconButton> <MoreVert /> </IconButton>
            </div>

        </div>

        <div className='sidebar__search'>

            <div className='sidebar__searchContainer'>

                <SearchOutlined />
                <input placeholder='Search or start new chat' type='text' />
            </div>

        </div>

        <div className='sidebar__chats'>
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar