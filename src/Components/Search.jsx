import React, { useContext, useState } from 'react'
import './Search.css'
import { FaUserPlus, FaUserMinus } from 'react-icons/fa'
import UserContext from '../UserContext'
import { useEffect } from 'react'

export default function Search({ contacts }) {

    const { user } = useContext(UserContext)
    const [isFriend, setIsFriend] = useState(false)


    useEffect(() => {
        let friendcheck = user.contact.map(e => {
            return e.username
        })
        if (friendcheck.includes(contacts.username)) {
            setIsFriend(true)
        }
        else {
            setIsFriend(false)
        }
    }, [])

    const add = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/user/add', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: contacts._id
            })
        }).then(res => res.json()).then(data => {
            window.location.reload()
        })
    }


    return (

        <div className="searchcontact">
            <h4>{`${contacts.username}`}</h4>
            {isFriend ? <FaUserMinus className='icons' /> : <FaUserPlus className='icons' onClick={add} />}


        </div>

    )
}
