import React from "react"
import {Link} from'react-router-dom';
import '../styles/Homepage.css'

const HomePage = () => {
    return (
<>
<video autoPlay muted loop id="myvideo">
    <source src="/assets/videos/bg.mp4" type="video/mp4"/>
</video>
<div className="content">
    <div className="card w-25">
        <img src="/assets/images/p1.png" alt="logo" />
    <hr/>
    <div className="card-body" style={{marginTop: '-60px'}}>

        <h5>Indias No #1 carrer Platform</h5>
        <p className="card-text">
            Search and manage your jobs with easy way
        </p>
        <div className="d-flex justify-content-between mt-5">
            <p>Not a User Register <Link to='/register'>Here !</Link>{' '}</p>
            <p><Link to='/login' className="myBtn">Login</Link></p>
        </div>
        </div>
    </div>
</div>
</>
    )
}

export default HomePage