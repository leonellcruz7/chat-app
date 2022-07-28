import React, { useState } from 'react'
import './Contacts.css'
import { FiMessageSquare, FiSearch } from 'react-icons/fi'
import { useContext } from 'react'
import UserContext from '../UserContext'
import Search from './Search'
import { useEffect } from 'react'
import MyFriends from './MyFriends'
import ChatPage from './ChatPage'
import { useNavigate } from 'react-router-dom'
import ChatContext from '../ChatContext'

export default function Contacts() {

    const { user } = useContext(UserContext)
    const [searchInput, setSearchInput] = useState('')
    const [contactList, setContactList] = useState([])
    const [onSearch, setOnSearch] = useState(false)
    const [friends, setFriends] = useState([])

    const myContact = user.contact

    const nav = useNavigate()

    // contacts
    useEffect(() => {
        if (myContact == undefined) {

        }
        else {
            setFriends(myContact.map(list => {
                return (
                    <MyFriends key={list._id} contactProp={list} />
                )
            }))
        }

    }, [user])

    // onSearch
    useEffect(() => {
        if (searchInput == '') {
            setOnSearch(false)

        }
        else {
            setOnSearch(true)
        }
    }, [searchInput])

    // search
    useEffect(() => {
        fetch('http://localhost:3001/user/search', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                search: searchInput
            })
        }).then(res => res.json()).then(data => {

            setContactList(data.map(list => {
                return (
                    <Search key={list._id} contacts={list} />
                )
            }))
        })
    }, [searchInput])

    const logout = (e) => {
        localStorage.clear()

        nav('/')
    }

    return (
        <div className='main'>
            <div className="contacts">
                <div className="head">

                    <p>Welcome, {user.firstName + ' ' + user.lastName}</p>
                    <FiMessageSquare className='icons' />
                </div>
                <div className="search">
                    <FiSearch className='search-icon' />
                    <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                </div>
                <div className="divider"></div>
                <div className="contactlist">
                    <div className="list">
                        <div className="detail">
                            {onSearch ? contactList : friends}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={logout}>Logout</button>
                </div>

            </div>
            <ChatPage />
        </div>
    )
}
