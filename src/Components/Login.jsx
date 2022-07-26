import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'
import './Login.css'

export default function Login() {
    const nav = useNavigate()

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const login = (e) => {
        e.preventDefault()
        if (username !== '' && pass !== '') {
            fetch('http://localhost:3001/user/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: pass
                })
            }).then(res => res.json()).then(data => {
                if (data == false) {
                    alert('Login Failed')
                }
                else {
                    localStorage.clear()
                    localStorage.setItem('token', data.access)
                    nav('/contacts')
                    window.location.reload()
                }

            })
        }
        else {
            alert('Login Failed')
        }
    }

    return (
        <div className="login">

            <div className="card">

                <img src={require('../img/messenger.png')} className='messenger-logo' />
                <p className='slogan'>Connect with your favorite people</p>
                <input type="text" placeholder='Enter Username' value={username} onChange={e => setUsername(e.target.value)} />
                <input type="text" placeholder='Enter Password' value={pass} onChange={e => setPass(e.target.value)} />
                <button onClick={login}>Continue</button>
                <p>Don't have an account? <span onClick={e => nav('/register')}>Register</span> </p>
            </div>

        </div>
    )
}
