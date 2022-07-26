import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

export default function Register() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [usernameTaken, setUsernameTaken] = useState(false)
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const nav = useNavigate()

    const register = (e) => {
        e.preventDefault()
        if (!usernameTaken && firstname !== '' && lastname !== '' && username !== '' && pass !== '' && pass == pass2) {
            fetch('http://localhost:3001/user/create', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstname,
                    lastName: lastname,
                    username: username,
                    password: pass
                })
            }).then(res => res.json()).then(data => {
                console.log(data)
                nav('/')
            })
        }
        else {
            alert('Registration Failed')
        }

    }

    useEffect(() => {
        fetch('http://localhost:3001/user/checkuser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        }).then(res => res.json()).then(data => {
            if (data.length == 0) {
                setUsernameTaken(false)
            }
            else {
                setUsernameTaken(true)
            }
        })
    }, [username])
    return (
        <div className="register">
            <div className="card">
                <img src={require('../img/messenger.png')} className='messenger-logo' />
                <p className='slogan'>Connect with your favorite people</p>
                <form>
                    <h1>Register</h1>
                    <input className={(firstname == '') ? 'notif' : ''} type="text" placeholder='First Name' value={firstname} onChange={e => setFirstname(e.target.value)} />
                    <input className={(lastname == '') ? 'notif' : ''} type="text" placeholder='Last Name' value={lastname} onChange={e => setLastname(e.target.value)} />
                    <input className={(username == '' || usernameTaken) ? 'notif' : ''} type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />

                    {usernameTaken ? <p className='usertaken'>Username already taken</p> : <></>}

                    <input className={(pass == '') ? 'notif' : ''} type="password" placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} />
                    <input className={(pass2 == '' || pass !== pass2) ? 'notif' : ''} type="password" placeholder='Confirm Password' value={pass2} onChange={e => setPass2(e.target.value)} />
                    <button onClick={register}>Continue</button>
                </form>
                <p>Already have an account? <span onClick={e => nav('/')}>Login</span> </p>
            </div>
        </div>
    )
}
