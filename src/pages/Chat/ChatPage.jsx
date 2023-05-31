import React from 'react'
import MainChat from '../../components/Chat/MainChat'
import SideChat from '../../components/Chat/SideChat'
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="ChatPage">
        <div className="ChatContainer">
        <SideChat/>   
        <MainChat/>
    </div>
    </div>
  )
}

export default ChatPage
