import React from 'react'
import './Footer.scss'
import './Home.scss'
import { Link } from 'react-router-dom'
import apple from './image/AppleStore.webp'
import Google from './image/GooglePlay.webp'

const Footer = () => {
    return (
        <>
            <div className="foot">
                <div className='n1 n1n'>
                    <div >
                        <nav className='nav1 navfoot'>
                        <Link to="/">Tripo Games</Link>
                        </nav>
                    </div>
                </div>
                <div className="footP">
                    <p className='paragraph'>An Immersive Gaming Experience</p>
                </div>
                <div className="footmain">
                    
                    <div className="footmain1">
                        <div className="box4">
                            <h3 className="redP">Contact</h3>
                            <Link href="/">Info@mysite.com</Link>
                            <span>Tel: 123-456-7890</span>
                            <span>500 Terry Francine St</span>
                            <span>San Francisco, CA 94158</span>
                        </div>
                        <div className="box4">
                            <h3 className="redP">Navigation</h3>
                            <Link href="/">Games</Link>
                            <Link href="/">Carrers</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Contact</Link>
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Terms & Conditions</Link></div>
                        <div className="box4">
                            <h3 className="redP">Social</h3>
                            <Link href="/">Discord</Link>
                            <Link href="/">Twitch</Link>
                            <Link href="/">Facebook</Link>
                            <Link href="/">YouTube</Link>
                            <Link href="/">Twitter</Link>
                            <Link href="/">LinkedIn</Link>
                        </div>
                        <div className="box4">
                            <h3 className="redP">Find Us On</h3>
                            <img src={apple} alt="" />
                            <img src={Google} alt="" />
                        </div>
                    </div>
                </div>
                <footer className='paragraph footerP'><p>© 2035 by Tripo. Powered and secured by <a href="/">Roushan</a></p> </footer>
            </div>
        </>
    )
}

export default Footer