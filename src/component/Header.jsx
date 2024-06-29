import React, { useState, useEffect } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import down from './image/down-arrow.png'
import './Home'

function contact() {
  const connect = document.getElementById("Contact");
  connect.scrollIntoView({ behavior: 'smooth' })
}


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navLink, setnavLink] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Tlink = () => {
    setnavLink(!navLink);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShowNavbar = currentScrollPos < prevScrollPos || currentScrollPos === 0;
      setShowNavbar(shouldShowNavbar);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, navLink]);

  return (
    <div className={`navbar  diiv ${showNavbar ? 'show nn1' : ''}`}>
      <div className='n1 diiv'>
        <div>
          <nav className='nav1 diiv'>
            <Link to="/">Tripo Games</Link>
          </nav>
        </div>
      </div>
      <div className='n2 diiv'>
        <div>
          <nav className='nav2 navv2' id=''>
            <Link to="/"   ><p className={`paragraph ${(window.location.pathname === '/') ? 'bg1' : ''}`} onClick={Tlink}>Home</p></Link>
            <div>
              <p className="paragraph">Games</p>
              <div className="game-tabs">
                <Link to="/Kipon" className='game-para'><p className={`paragraph ${(window.location.pathname === '/Kipon') ? 'bg2' : ''}`} onClick={Tlink}>Kipon</p></Link>
                <Link to="/Robotrix" className='game-para'><p className={`paragraph ${(window.location.pathname === '/Robotrix') ? 'bg2' : ''}`} onClick={Tlink}>Robotrix</p></Link>
                <Link to="/Treasurebox" className='game-para'><p className={`paragraph ${(window.location.pathname === '/Treasurebox') ? 'bg2' : ''}`} onClick={Tlink}>Treasure Box</p></Link>
              </div>
            </div>
            <Link to="/Careers" ><p className={`paragraph ${(window.location.pathname === '/Careers') ? 'bg' : ''}`} onClick={Tlink}>Careers</p></Link>
            <Link to="/About" ><p className={`paragraph ${(window.location.pathname === '/About') ? 'bg' : ''}`} onClick={Tlink}>About</p></Link>
            <a href="/#Contact" onClick={contact} ><p className="paragraph">Contact</p></a>

          </nav>
        </div>
      </div>
      <div className="Hamberger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'l1' : ''}`}></div>
        <div className={`line ${menuOpen ? 'l2' : ''}`}></div>
        <div className={`line ${menuOpen ? 'l3' : ''}`}></div>
      </div>
      <div className={`sidebar ${menuOpen ? 'visiblebar' : ''}`}>
        <Link to="/"><p className={`paragraph ${(window.location.pathname === '/') ? 'bg1' : ''}`} onClick={Tlink}>Home</p></Link>
        <div ><p className="paragraph p-img">Game  <img src={down} alt="" className='down-arrow' /></p>
          <div className="linkone">
            <Link to="/Kipon" className='droplink'><p className={`paragraph ${(window.location.pathname === '/Kipon') ? 'bg2' : ''}`} onClick={Tlink}>Kipon</p></Link>
            <Link to="/Robotrix" className='droplink'><p className={`paragraph ${(window.location.pathname === '/Robotrix') ? 'bg2' : ''}`} onClick={Tlink}>Robotrix</p></Link>
            <Link to="/Treasurebox" className='droplink'><p className={`paragraph ${(window.location.pathname === '/Treasurebox') ? 'bg2' : ''}`} onClick={Tlink}>Treasure Box</p></Link>
          </div>
        </div>
        <Link to="/Careers"><p className={`paragraph ${(window.location.pathname === '/Careers') ? 'bg' : ''}`} onClick={Tlink}>Careers</p></Link>
        <Link to="/About" onClick={() => {
          setPrevScrollPos(0);
          window.scrollY = 0;
        }}><p className={`paragraph ${(window.location.pathname === '/About') ? 'bg' : ''}`} onClick={Tlink}>About</p></Link>
        <Link to="/Contact" onClick={contact}><p className="paragraph">Contact</p></Link>
      </div>
    </div>
  )
}

export default Header