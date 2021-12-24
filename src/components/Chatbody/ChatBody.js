import React from 'react'
import ChatContent from '../Chatcontent/ChatContent'
import ChatList from '../Chatlist/ChatList'
import UserProfile from '../Userprofile/UserProfile'
import './ChatBody.css'

const ChatBody = () => {
    return (
        <div className='chatbody'>
            <ChatList />
            <ChatContent />
            <UserProfile />
        </div>
    )
}

export default ChatBody 
