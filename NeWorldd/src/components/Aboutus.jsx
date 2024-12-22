import React from "react";
import {Link, useParams} from 'react-router-dom'


const Aboutus = () => {
    return (
        <>
        <header className="header">
            <div>
                <h1>Neworld?</h1>
            </div>

            <div className="about-us">
                <i className="fas fa-moon"></i> <p>Dark Mode</p>
                 <Link to ="/About-us" className="btn"> <i className="fas fa-arrow-left">About us</i>
                    </Link>
            </div>
        </header>
        </>
    )
}

export default Aboutus