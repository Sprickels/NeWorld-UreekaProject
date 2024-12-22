import React from "react";
import {Link, useParams} from 'react-router-dom'


const Header = () => {
    return (
        <>
        <header className="header">
            <div>
                <h1>NeWorld?</h1>
            </div>

            <div className="about-us">
                <ul>
                    <li><Link to ="/Negara" className="btn">Country Page</Link></li>
                    <li><Link to ="/About-us" className="btn">About Page</Link></li>
                    <li>Dark Mode</li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header