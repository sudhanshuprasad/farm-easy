import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import farmeasyimage from '../resource/farmeasy.png'
import {signInWithGoogle} from "../firebase"

const Navbar = () => {
    console.log(`${process.env.PUBLIC_URL}/farmeasy.png`)
    return (
        <div>
            <section id="header">
                <Link to="/"> <img id="logoImg" src={farmeasyimage}></img></Link>
                <ul id="navbar">
                    <li><Link className="active" to="home">Dashboard</Link></li>
                    <li><Link to="shop">shop</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                    <li><Link to="help">Help</Link></li>
                    <li><Link to="profile">{localStorage.getItem("name")}</Link></li>
                    
                     {localStorage.getItem("name")?null:<li><button onClick={signInWithGoogle}>Google Login</button></li>}
                    
                    <li><Link to="cart"><img src="https://img.icons8.com/office/16/null/shopping-cart.png"></img></Link></li>
                </ul>
            </section>
        </div>
    )
}

export default Navbar
