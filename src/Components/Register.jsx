import React from 'react'
import './Register.css'

export default function Register() {
    return (
        <div className="register">
            <div className="mdCon">
                <div className="row">
                    <div className="col2">
                        <h1>Messenger Clone</h1>
                    </div>
                    <div className="col2">
                        <div className="card">
                            <input type="text" />
                            <input type="text" />
                            <p>Already have an account? Login</p>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
