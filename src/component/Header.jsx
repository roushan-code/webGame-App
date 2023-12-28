import React, { useState, useEffect } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import down from './image/down-arrow.png'
import './Home'

function contact(){
  const connect = document.getElementById("Contact");
  connect.scrollIntoView({behavior: 'smooth'})
}

const top = ()=>window.screenTop();

const Header = () => {
  
  // const [bar, setbar] = useState([])
  // const [burger, setburger] = useState([])
  // useEffect(() => {
  // const nav2 = document.querySelector(".nav2");
  // const line = document.querySelector(".line");
  //   const bar = document.querySelector('.sidebar');
  //   const burger = document.querySelector('.Hamberger');
  //   burger.addEventListener('click',()=>{
  //     bar.classList.toggle('.visiblebar');
  //   })
  // },[]);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
  }, [prevScrollPos]);

  const scrollsss = () =>{
    window.screenTop();
  }

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
            <Link to="/" onClick={top} ><p className="paragraph">Home</p></Link>
            {/* <Link to="/"  ><p className="paragraph">Home</p></Link> */}
            <Link onClick={scrollsss} >
              <p className="paragraph">Games</p>
              <div className="game-tabs">
                <Link to="/Kipon" onClick={()=>window.screenTop()} className='game-para'><p className="paragraph">Kipon</p></Link>
                <Link to="/Robotrix" onClick={()=>window.screenTop()} className='game-para'><p className="paragraph">Robotrix</p></Link>
                <Link to="/Treasurebox" onClick={()=>window.screenTop()} className='game-para'><p className="paragraph">Treasure Box</p></Link>
              </div>
            </Link>
            <Link to="/Careers" onClick={scrollsss}><p className="paragraph">Careers</p></Link>
            <Link to="/About" onClick={scrollsss}><p className="paragraph">About</p></Link>
            <a href="/#Contact" onClick={contact} ><p className="paragraph">Contact</p></a>
            {/* <select name="" id="">
              <option value="">Kipon</option>
              <option value="">Robotrix</option>
              <option value="">Treasure Box</option>
            </select> */}
          </nav>
        </div>
      </div>
      <div className="Hamberger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'l1' : ''}`}></div>
        <div className={`line ${menuOpen ? 'l2' : ''}`}></div>
        <div className={`line ${menuOpen ? 'l3' : ''}`}></div>
      </div>
      <div className={`sidebar ${menuOpen ? 'visiblebar' : ''}`}>
        <Link to="/"><p className="paragraph">Home</p></Link>
        <Link ><p className="paragraph p-img">Game  <img src={down} alt="" className='down-arrow' /></p>
            <div className="linkone">
              <Link to="/Kipon" className='droplink'><p className='paragraph'>Kipon</p></Link>
              <Link to="/Robotrix" className='droplink'><p className='paragraph'>Robotrix</p></Link>
              <Link to="/Treasurebox" className='droplink'><p className='paragraph'>Treasure Box</p></Link>
            </div>
        </Link>
        <Link to="/Careers"><p className="paragraph">Careers</p></Link>
        <Link to="/About" onClick={()=> {
          setPrevScrollPos(0);
          window.scrollY=0;
        }}><p className="paragraph">About</p></Link>
        <Link to="/Contact" onClick={contact}><p className="paragraph">Contact</p></Link>
      </div>
    </div>
  )
}

export default Header