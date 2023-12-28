import React from 'react'
import './Footer.scss'
import './Home.scss'
import { Link } from 'react-router-dom'
import apple from './image/AppleStore.webp'
import Google from './image/GooglePlay.webp'

const appLink ="https://www.apple.com/in/?afid=p238%7Csfo291LJq-dc_mtid_187079nc38483_pcrid_680861337497_pgrid_109516736059_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-brand--slid---product-"

const GLink = 'https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Jun1223&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Jun1223-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700076783011871_creativeid_662052581180_device_c&gclid=Cj0KCQiAkKqsBhC3ARIsAEEjuJhkqNnZFUWaMljPH81yMMTCAHIsbdergeJL0UF8nJihszG1vAn-OSIaAsbaEALw_wcB&gclsrc=aw.ds&pli=1'

const insta = "https://www.instagram.com/roushansingh3698/?fbclid=IwAR0iqrOSHNK3T9Spvh_vpsG8lJiQJt6g6yiMDx6TH3bN7Tt7obRgXdAH5BQ"

const facebook = "https://www.facebook.com/profile.php?id=100032073308149";

const youtube = "https://www.youtube.com/channel/UCvEI5ZzcQUubigBvBgvotSg"

const twitter = "https://x.com/Roushan22896940?t=VF9oLnlChc0HNwEkes8oKQ&s=08 "

const linkedin = "https://www.linkedin.com/in/roushan-singh-645819236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"



const Footer = () => {
    function ourgame(){
        const game = document.getElementById("ourGame");
        game.scrollIntoView({behavior: 'smooth'})
    }
    function contact(){
        const connect = document.getElementById("Contact");
        connect.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
            <div className="foot">
                <div className='n1 n1n'>
                    <div >
                        <nav className='nav1 navfoot'>
                            <Link to="/" >Tripo Games</Link>
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
                            <Link to="/">Info@mysite.com</Link>
                            <span>Tel: 123-456-7890</span>
                            <span>500 Terry Francine St</span>
                            <span>San Francisco, CA 94158</span>
                        </div>
                        <div className="box4">
                            <h3 className="redP" >Navigation</h3>
                            <Link to="/#ourGame" onClick={ourgame} >Games</Link>
                            <Link to="/Careers" >Carrers</Link>
                            <Link to="/About" >About</Link>
                            <Link to="/#Contact" onClick={contact} >Contact</Link>
                            <Link to="/" >Privacy Policy</Link>
                            <Link to="/" >Terms & Conditions</Link></div>
                        <div className="box4">
                            <h3 className="redP">Social</h3>
                            <Link to="/">Discord</Link>
                            <Link to={insta} target='_blank'>Instagram</Link>
                            <Link to={facebook} target='_blank'>Facebook</Link>
                            <Link to={youtube} target='_blank'>YouTube</Link>
                            <Link to={twitter} target='_blank'>Twitter</Link>
                            <Link to={linkedin} target='_blank'>LinkedIn</Link>
                        </div>
                        <div className="box4">
                            <h3 className="redP">Find Us On</h3>
                            <Link to={appLink} target="_blank"><img className='AppGoogle' src={apple} alt="" /></Link>
                <Link to={GLink} target="_blank"><img className='AppGoogle' src={Google} alt="" /></Link>
                        </div>
                    </div>
                </div>
                <footer className='paragraph footerP'><p>© 2035 by Tripo. Powered and secured by <a href="/">Roushan</a></p> </footer>
            </div>
        </>
    )
}

export default Footer