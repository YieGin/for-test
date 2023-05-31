import React from 'react';
import { BsCheck2All } from 'react-icons/bs';
import '../../pages/Chat/ChatPage.css';

const Message = () => {
  return (
    <div className="message">
        <div className="messageContent">
            <div className="messageText">
                <p>H/016- sadasdasd asdasdas dasa sad adasdas dasd asd asdasd asdasd asd asd dds ad sas das das sadasd asd asd asd asd asd ad asd asd ad as dasd asd sa dadsas adsasd asdas das a dasd asd asd asd asd asd as dasd as  adsdasdasdas das das asd asd asd ads asd asd asd adas asd asd sdasdas dasds ada sdasd asd asdasd dasdas das dasdas dadasda sdasd ello</p>
            </div>
            <div className="messageDetails">
                <span>11:23</span>
                <BsCheck2All size={22} />
            </div>
        </div>
    </div>
  )
}

export default Message;