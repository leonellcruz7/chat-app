import React, { useContext, useEffect } from 'react'
import './ChatPage.css'
import io from 'socket.io-client'
import ChatContext from '../ChatContext'
import UserContext from '../UserContext'

const socket = io.connect('http://localhost:3001')


export default function ChatPage() {

    const { chat } = useContext(ChatContext)
    const { user } = useContext(UserContext)

    useEffect(() => {

        fetch('http://localhost:3001/chat/createchat', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                me: user.username,
                friend: chat.username
            })
        }).then(res => res.json()).then(data => {
            console.log(data._id)
        })
    }, [chat])


    return (
        <div className="chatpage">
            <div className="header">
                Contact Name
            </div>
            <div className="body">
                <div className="message me">

                    <p>hello</p>

                </div>
                <div className="message">

                    <p>how are you</p>


                </div>
            </div>
            <div className="footer">
                <input type="text" name="" id="" />
                <button>send</button>
            </div>

        </div>
    )
}
