import React from 'react';
import '../../pages/Chat/ChatPage.css';
import { AiFillPhone } from 'react-icons/ai';
import { IoPersonSharp } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import Messages from './Messages';
import Input from './Input';

const MainChat = () => {
  return (
    <div className="MainChat">
      <div className="chatInfo">
        <img src="https://hips.hearstapps.com/hmg-prod/images/will-smith-attends-varietys-creative-impact-awards-and-10-directors-to-watch-brunch-at-the-parker-palm-springs-on-january-3-2016-in-palm-springs-california-photo-by-jerod-harrisgetty-images.jpg" alt="" />
        <span>Will Smith</span>
        <div className="chatIcons">
          <AiFillPhone size={24} />
          <IoPersonSharp size={24} />
          <BsThreeDots size={24} />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default MainChat;
