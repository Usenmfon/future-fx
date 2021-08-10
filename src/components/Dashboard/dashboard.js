import React, { useState } from 'react'
import './dashboard.css'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'


export default function Dashboard(){
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.pushState('/signin')
        } catch {
            setError('Failed to log out')
        }
    }


    return(
        <section className="bulk">
                <span style={{fontSize: '30px', cursor: 'pointer'}} className="ex" onClick="openNav()">&#9776;</span>
                <div id="mySidenav" className="contain">
                    <a href={{javascript:void(0)}} className="closebtn" onClick="closeNav()">&times;</a>
                    <div className="contain-content">
                        <div className="one-man text-center" id="settings fixed-top">
                            <a href="dashboard.html" className="no-box" style={{textDecoration: 'none'}} >
                            <div className="two" id="settings" >
                                <img src="https://res.cloudinary.com/not-set/image/upload/v1623155917/futurelabs/Group_28_tpsnfv.png" alt="" />
                            </div>
                            <div className="manny pt-3 well" id="settings">
                                <img src="https://res.cloudinary.com/not-set/image/upload/v1624368592/futurelabs/Group_29_1_bjzvxd.png" alt="" />
                                <h5 className="sidetext settings">Convert</h5>
                            </div>
                            </a>
                        </div>
                        <div className="text-center same">
                            <a href="accounts.html" className="no-box" style={{textDecoration: 'none'}}>
                            <div className="normal pt-4 well">
                                <img src="https://res.cloudinary.com/not-set/image/upload/v1623154793/futurelabs/Wallet_a2hu7z.png" alt="" />
                                <h5 className="sidetext">Accounts</h5>
                            </div>
                            </a>
                        </div>
                        <div className="text-center same">
                            <a href="transactions.html" className="no-box" style={{textDecoration: 'none'}}>
                            <div className="normal1 pt-3 well">
                                <img src="https://res.cloudinary.com/not-set/image/upload/v1623155272/futurelabs/Group_45_soxqef.png" alt="" />
                                <h5 className="sidetext ">Transactions</h5>
                            </div>
                            </a>
                        </div>
                        <div className="same text-center " >
                            <a href="settings.html" className="no-box" style={{textDecoration: 'none'}}>
                            <div className="normal2 pt-3">
                                <img src="https://res.cloudinary.com/not-set/image/upload/v1624368517/futurelabs/Group_30_1_2_diuyd5.png" alt="" />
                                <h5 className="sidetext ">Settings</h5>
                            </div>
                            </a>
                        </div>
                        <div className="same text-center">
                        <a href={{javascript:void(0)}} onClick={handleLogout} className="no-box" style={{textDecoration: 'none'}}>
                            <div className="normal3 pt-3">
                                <img src="https://res.cloudinary.com/not-set/image/upload/v1623155406/futurelabs/Group_33_vyxf7l.png" alt="" />
                                <h5 className="sidetext">Log out</h5>
                            </div>
                        </a>
                        </div>
                        <div className="same-last text-center"></div>  
                    </div>
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="container main rounded pb-1 shadow-lg p-3 mb-5 bg-body rounded" id="card-box">
                    <div className="row ml-4" id="row2">
                        <div className="col-md-2 col-sm-12">
                            <div className="avatar">
                            <img src="https://res.cloudinary.com/not-set/image/upload/v1623073947/futurelabs/Ellipse_17_hyqqju.png" alt="" />
                            </div>
                            <div className="data">
                            <h4 className="profile">Profile picture</h4>
                            <p className="para"><strong>Email:</strong> {currentUser.email}</p>
                            {/* <p className="para">Choose a photo to use as your avatar</p> */}
                            </div>
                        </div>
                    </div>
                <div className="p-3 mb-2 bg-warning text-dark w-75 ml-5 text-center mt-3 rounded">Complete Your KYC verification</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card  mt-2 shadow-lg p-3 mb-5 bg-white rounded h-55 khds " style={{width: '18rem', marginLeft: '30px'}} >
                                <div className="card-body">
                                    <div className="input-group">
                                    
                                        <div className="input-group-append">
                                            <div className=" w-100 h-100" >
                                                <p><span className="" style={{fontWeight: 'bolder', color:'#000', fontSize: '20px'}} >USD</span><span><input  className="" style={{fontWeight: 'bolder', color: '#000', fontSize: '20px'}} id="f" placeholder="" onkeyup="convert('F')" /></span> 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                        <div className="col-md-5">
                            <div className="card mt-2 shadow-lg p-3 mb-5 bg-white rounded h-55 khd" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <div className="input-group">
                                    
                                    <p><span className="" style={{fontWeight: 'bolder', color: '#000', fontSize: '20px'}} >NGN</span><span><input className="" style={{fontWeight: 'bolder', color: '#000', fontSize: '20px'}} id="c" placeholder="" onkeyup="convert('C')" /></span></p>
                                    
                                        <div className="input-group-append">
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="block"  href="accounts.html">Continue</a>
                </div>
            </div>
        </section>
    )
}