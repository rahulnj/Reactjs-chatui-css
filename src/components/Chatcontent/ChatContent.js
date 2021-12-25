import React, { createRef } from 'react'
import Avatar from '../Chatlist/Avatar';
import './ChatContent.css'
import ChatItem from './ChatItem';

const ChatContent = () => {
    const messagesEndRef = createRef(null);
    const chatItems = [
        {
            key: 1,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Hi Tim, How are you?",
        },
        {
            key: 2,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I am fine.",
        },
        {
            key: 3,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "What about you?",
        },
        {
            key: 4,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Awesome these days.",
        },
        {
            key: 5,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "Finally. What's the plan?",
        },
        {
            key: 6,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "what plan mate?",
        },
        {
            key: 7,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I'm taliking about the tutorial",
        },
    ];

    return (
        <div className='main__chatcontent'>
            <div className='content__header'>
                <div className='blocks'>
                    <div className='current-chatting-user'>
                        <Avatar isOnline='active' image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" />
                        <p>Tim Hover</p>
                    </div>
                </div>
                <div className='blocks'>
                    <div className="settings">
                        <button className="btn-nobg">
                            <i className='fa fa-cog'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="content-body">
                <div className="chat-items">
                    <ChatItem animationDelay={1 + 2}
                        key='3'
                        user={chatItems.type ? chatItems.type : "me"}
                        msg='hi how are you'
                        image='https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png' />
                    <div ref={messagesEndRef} />
                    <ChatItem animationDelay={1 + 2}
                        key='3'
                        user={chatItems.type ? chatItems.type : "other"}
                        msg='hi how are you'
                        image='https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png' />
                    <div ref={messagesEndRef} />
                    <ChatItem animationDelay={1 + 2}
                        key='3'
                        user={chatItems.type ? chatItems.type : "other"}
                        msg='hi how are you'
                        image='https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png' />
                    <div ref={messagesEndRef} />
                    <ChatItem animationDelay={1 + 2}
                        key='3'
                        user={chatItems.type ? chatItems.type : "me"}
                        msg='hi how are you'
                        image='https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png' />
                    <div ref={messagesEndRef} />
                    <ChatItem animationDelay={1 + 2}
                        key='3'
                        user={chatItems.type ? chatItems.type : "other"}
                        msg='hi how are you'
                        image='https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png' />
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <div className="content__footer">
                <div className="sendNewMessage">
                    <button className="addFiles">
                        <i className="fa fa-plus"></i>
                    </button>
                    <input
                        type="text"
                        placeholder="Type a message here"
                    />
                    <button className="btnSendMsg" id="sendMsgBtn">
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatContent
