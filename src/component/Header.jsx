import React,{useState,useEffect} from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

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
            <Link to="/"><p>Home</p></Link>
            <Link to="/Games"><p>Games</p></Link>
            <Link to="/Careers"><p>Careers</p></Link>
            <Link to="/About"><p>About</p></Link>
            <a href="#Contact"><p>Contact</p></a>
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
            <Link to="/"><p>Home</p></Link>
            <Link to="/Games"><p>Games</p></Link>
            <Link to="/Careers"><p>Careers</p></Link>
            <Link to="/About"><p>About</p></Link>
            <Link to="/Contact"><p>Contact</p></Link>
            </div>
    </div>
  )
}

export default Header