import React, { useRef } from 'react'
import '../../pages/Chat/ChatPage.css'
import { IoSend } from 'react-icons/io5'
import { GrEmoji } from 'react-icons/gr'
import { BsFillMicFill, BsPlusSquareDotted } from 'react-icons/bs'

const Input = () => {
  const inputRef = useRef(); 

  const focusInput = () => {
    inputRef.current.focus(); 
  }

  return (
    <div className="input" onClick={focusInput}>
        <label className="input-label">
            <input ref={inputRef} type="text" id="message" placeholder='Type your message...'/>
        </label>
        <div className="sendIcons">
            <GrEmoji size={32} className="emojiIcon" />
            <BsFillMicFill size={32} className="micIcon" />
            <BsPlusSquareDotted size={32} className="plusIcon" />
            <IoSend size={32} className="sendIcon" />
        </div>
    </div>
  )
}

export default Input