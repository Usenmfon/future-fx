import React from 'react'
import './index.css';
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-warning" href="./index.html"><strong className="ml-5">Future Capital</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end text-warning" id="navbarNavAltMarkup">
            <div className="navbar-nav text-warning mr-5">
                <a className="nav-item nav-link text-warning" href="sign-in.html"><Link className="text-warning text-decoration-none" to="/signin">Sign in</Link></a>
                <a className="nav-item nav-link text-warning" href="./index.html"><Link className="text-warning text-decoration-none" to="/signup">Signup</Link></a>
                <a className="nav-item nav-link text-warning" href="./index.html"><Link className="text-warning text-decoration-none" to="/dashboard">Dashboard</Link></a>
                <a className="nav-item nav-link text-warning" href="./index.html">Blog</a>
            </div>
        </div>
    </nav>
    )
}

function Section(){
    return(
        <div className="section">
            <section id="hero" className="text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="oneclick">Future FX</h1>
                            <p className="hero">Buy and sell local and foreign currencies at the best market rates with ZERO CHARGES.</p>
                        </div>
                    </div>
                    <div className="row  no-gutters  align-items-center">
                        <div className="col">
                            <input className="no-border change" type="number" id="f" placeholder="NGN" onkeyup="convert('F')" />
                        </div>
                        <div className="col-sm-auto"><img src="https://res.cloudinary.com/not-set/image/upload/v1624630624/futurelabs/Group_17_1_m41y1q.png" alt=""/></div>
                        <div className="col"><input className="no-border change" type="number" id="c" placeholder="USD" onkeyup="convert('C')" /></div>
                    </div>
                </div>
                <button className="orange">Get Started</button>
            </section>
            <section id="why">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="capital text-center">Why Future Capital</h1>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-sm-6">
                            <img src="https://res.cloudinary.com/not-set/image/upload/v1624631451/futurelabs/Group_56_d4yzuf.png" className="padup" alt="" />
                        </div>
                        <div className="col-sm-6">
                            <h2 className="whyus">Transparent & High Rates</h2>
                            <p className="whydesc">No hidden charges, we will try to charge<br /> as low as possible and indicate it upfront</p>
                        </div>

                        <div className="col-sm-6">
                            <h2 className="whyus">Fast & Secure</h2>
                            <p className="whydesc">We are one-click exchange platfrom because<br /> we provide the easiest and quickest online<br /> transaction platform</p>
                        </div>
                        <div className="col-sm-6">
                            <img src="https://res.cloudinary.com/not-set/image/upload/v1624631417/futurelabs/Group_57_ntpihs.png" className="padup" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="how">

                <div className="container">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img src="https://res.cloudinary.com/not-set/image/upload/v1624631860/futurelabs/Group_60_qs8u1u.png" alt=""/> </div>


                                <img src="https://res.cloudinary.com/not-set/image/upload/v1624659021/futurelabs/Group_61_xouyei.png" alt=""/>
                                <h3 className="steps pt-3">Select Currency</h3>
                                <p className="whydesc">Get paid </p>

                            </div>
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img src="https://res.cloudinary.com/not-set/image/upload/v1624631954/futurelabs/Group_55_ecclcz.svg" alt="" /> </div>
                                <img src="https://res.cloudinary.com/not-set/image/upload/v1624659015/futurelabs/Group_62_uxbvh9.png" alt="" />

                                <h3 className="steps pt-3">Select Payment Method</h3>
                                <p className="whydesc">Choose preferred payment method </p>

                            </div>
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img src="https://res.cloudinary.com/not-set/image/upload/v1624632060/futurelabs/Group_70_kx3o1v.png" alt="" /> </div>

                                <img src="https://res.cloudinary.com/not-set/image/upload/v1624659007/futurelabs/Group_63_bwyoai.png" alt="" />
                                <h3 className="steps">Get Paid</h3>
                                <p className="whydesc">Select your available currency</p>

                            </div>
                                    {/* <!-- <div className="col-sm-4"></div>
                            <div className="col-sm-4"></div> --> */}
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button className="orange mb-4">Get Started</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id="payoneer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="capital text-center" style={{color: 'white'}}>Easy Payoneer Exchange</h1>
                            <p className="text-center rose">Got Payoneer? we are buying at 470, instant settlement, via WhatsApp, no charges</p>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row no-gutters start-items-center">
                            <div className="offset-sm-2 col-sm-auto card2">
                                <div className="card1">
                                    <img src="https://restcountries.eu/data/usa.svg" alt="USD" width="30" height="30" />
                                    <h1 className="capital">USD</h1>
                                    <form className="grey">
                                        <input className="no-border" type="number" id="b" placeholder="" onkeyup="convert('b')" />
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-auto align-self-center"> <img className="card3" src="https://res.cloudinary.com/not-set/image/upload/v1624630624/futurelabs/Group_17_1_m41y1q.png" alt="" /> </div>


                            <div className="col-sm-4 card2">
                                <div className="card1">
                                    <img src="https://restcountries.eu/data/nga.svg" alt="USD" width="30" height="30" />
                                    <h1 className="capital">Naira</h1>
                                    <form className="grey">
                                        <input className="no-border" type="number" id="a" placeholder="" onkeyup="convert('a')" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="text-center"><button className="orange text-center">WhatsApp</button></div>
                    </div>
                </div>
            </section>
            <section id="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p className="news">Get Daily Currency Updates and Investment Tips in Your Inbox</p>
                            <form>
                                <div className="form-group text-center">
                                    <input className="down form-control" type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email" />
                                </div>
                            </form>
                            <button className="orange">Join US</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <img src="https://res.cloudinary.com/not-set/image/upload/v1624632410/futurelabs/future_capital_logo_oxnfld.png" alt=""/>
                    </div>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <p class="small2">Email</p>
                        <div class="line"></div>
                        <p class="email">Hello@FutureFX.Africa</p>
                        <p class="small2">Address</p>
                        <div class="line"></div>
                        <p class="email">3 Chubb Road Ikot Ekpene, Akwa Ibom State</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function HomePage(){
    return(
        <div>
            <NavBar />
            <Section />
            <Footer />
        </div>
    )
}

export default HomePage