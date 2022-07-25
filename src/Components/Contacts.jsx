import React from 'react'
import './Contacts.css'
import { FiMessageSquare, FiSearch } from 'react-icons/fi'

export default function Contacts() {
    return (
        <div className="contacts">
            <div className="head">
                <img src={require('../img/id.jpg')} alt="" />
                <p>Chats</p>
                <FiMessageSquare className='icons' />
            </div>
            <div className="search">
                <FiSearch className='search-icon' />
                <input type="text" />

            </div>
            <div className="divider"></div>
            <div className="contactlist">
                <div className="list">
                    <img src={require('../img/id.jpg')} alt="" />
                    <div className="detail">
                        <h4>Name</h4>
                        <p>This is the messagsdfsdfsdfsdfsdfsdfsdsdsdfess</p>
                    </div>
                </div>
                <div className="list">
                    <img src={require('../img/id.jpg')} alt="" />
                    <div className="detail">
                        <h4>Name</h4>
                        <p>This is the messagsdfsdfsdfsdfsdfsdfsdsdsdfess</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
