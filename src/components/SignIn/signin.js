import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import './signin.css'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function SignIn() {
    const emailRef = useRef()
    const passwordRef =useRef()
    const { signin } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <div className="row no-gutters">
            <div className="col-md-7 no-gutters">
            <div className="leftside  d-flex justify-content-center align-items-center">
                <div className="col-sm-3 snn d-flex justify-content-center align-items-center no-gutters">
                    <div className=" d-flex justify-content-center align-items-center no-gutters">
                        <p className="sn">Sign In</p>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <p className="element"></p>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-md-5 no-gutters">
                <div className="rightside  d-flex justify-content-center align-items-center">
                <div className="col-sm-11 fmm d-flex justify-content-center align-items-center no-gutters">
                    <div className="col-sm-9 d-flex justify-content-center align-items-center">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="email" id="email">Email:</label>
                                <input ref={emailRef} type="email" className="form-control input1"  placeholder="Enter email" name="email" required/>
                            </div>
                            <div className="form-group">
                                <label for="password" id="password">Password:</label>
                                <input ref={passwordRef} type="password" className="form-control input2" placeholder="Enter password" name="password" required/>
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    Need an account? <Link to='/signup'>Sign Up</Link>
                                </label>
                            </div>
                            <button disabled={loading} type="submit" className="btn summit" id="wht">Sign IN</button>
                        </form>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}