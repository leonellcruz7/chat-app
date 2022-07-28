import React, { useContext } from 'react'
import { useEffect } from 'react'
import ChatContext from '../ChatContext'
import './MyFriends.css'

export default function MyFriends({ contactProp }) {
    const { chat, setChat } = useContext(ChatContext)

    const getDetails = (e) => {
        e.preventDefault()
        setChat({
            username: contactProp.username,
            firstName: contactProp.firstName,
            lastName: contactProp.lastName
        })
    }

    return (
        <div className="contactList" onClick={getDetails}>
            <h4>{contactProp.username}</h4>
        </div>
    )
}
