import React from 'react'
import '../../pages/Chat/ChatPage.css'
import NavChat from './NavChat'
import Search from './Search'
import Chats from './Chats'

const SideChat = () => {
    return (
      <div className="SideChat">
          <NavChat />
          <Search />
          <div className="ChatScrollContainer">
            <Chats />
          </div>
      </div>
    )
  }
  export default SideChat;