import React, { useState } from 'react'
import './Contacts.css'
import { FiMessageSquare, FiSearch } from 'react-icons/fi'
import { useContext } from 'react'
import UserContext from '../UserContext'
import Search from './Search'
import { useEffect } from 'react'

export default function Contacts() {
    const { user } = useContext(UserContext)
    const [searchInput, setSearchInput] = useState('')

    const search = () => {

    }
    return (
        <div className="contacts">
            <div className="head">

                <p>{user.firstName + ' ' + user.lastName}</p>
                <FiMessageSquare className='icons' onClick={search} />
            </div>
            <div className="search">
                <FiSearch className='search-icon' />
                <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            </div>
            <div className="divider"></div>
            <div className="contactlist">
                <div className="list">
                    <div className="detail">
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    )
}
