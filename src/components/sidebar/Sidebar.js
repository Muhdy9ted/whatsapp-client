import React from 'react'

import {DonutLarge, MoreVert, Chat} from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/material';

import './Sidebar.css'

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
    </div>
  )
}

export default Sidebar