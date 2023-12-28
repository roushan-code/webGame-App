// import React,{useRef} from 'react'
// import React, { useState } from 'react'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'
import './Home.scss'
import './Contact'

import './HomeP.scss'
import apple from './image/AppleStore.webp'
import Google from './image/GooglePlay.webp'
import img1 from './image/1st_img.webp'
import img2 from './image/2nd_img.webp'
import img3 from './image/3rd_img.jpg'
import img4 from './image/4th_img.webp'
import img5 from './image/5th_img.webp'
import img6 from './image/6th_img.webp'
import img7 from './image/7th_img.webp'
import img8 from './image/8th_img.webp'
import img9 from './image/9th_img.webp'
import img11 from './image/11th_BG.webp'
import Contact from './Contact';

const appLink ="https://www.apple.com/in/?afid=p238%7Csfo291LJq-dc_mtid_187079nc38483_pcrid_680861337497_pgrid_109516736059_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-brand--slid---product-"

const GLink = 'https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Jun1223&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Jun1223-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700076783011871_creativeid_662052581180_device_c&gclid=Cj0KCQiAkKqsBhC3ARIsAEEjuJhkqNnZFUWaMljPH81yMMTCAHIsbdergeJL0UF8nJihszG1vAn-OSIaAsbaEALw_wcB&gclsrc=aw.ds&pli=1'


const Home = () => {
  // const {ref,inView} =useInView({
  //   threshold:0.5,
  // })
  const [div0Ref, div0InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div1Ref, div1InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div2Ref, div2InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div3Ref, div3InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div4Ref, div4InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div5Ref, div5InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div6Ref, div6InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div7Ref, div7InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div8Ref, div8InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div9Ref, div9InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div10Ref, div10InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div11Ref, div11InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div12Ref, div12InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div13Ref, div13InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });
  const [div14Ref, div14InView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.4
  });

  // const [inputValue, setInputValue] = useState('');
  // const [inputValue1, setInputValue1] = useState('');
  // const [inputValue2, setInputValue2] = useState('');
  // const [inputValue3, setInputValue3] = useState('');
  // const [inputValue4, setInputValue4] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Do something with the submitted data
  //   console.log('Submitted:', inputValue);

  //   // Reset the input field
  //   setInputValue('');
  //   setInputValue1('');
  //   setInputValue2('');
  //   setInputValue3('');

  // };
  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   // Do something with the submitted data
  //   console.log('Submitted:', inputValue);

  //   // Reset the input field
  //   setInputValue4('');

  // };

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };
  // const handleInputChange1 = (e) => {
  //   setInputValue1(e.target.value);
  // };
  // const handleInputChange2 = (e) => {
  //   setInputValue2(e.target.value);
  // };
  // const handleInputChange3 = (e) => {
  //   setInputValue3(e.target.value);
  // };
  // const handleInputChange4 = (e) => {
  //   setInputValue4(e.target.value);
  // };

  const top = ()=> window.screenTop();

  return (
    <>

      <section className='section1'>
        <div className='firstSection'>
          <h1 className='head'>Made to Be Played </h1>
          <p>The Very Best in Mobile Gaming</p>
          <div className='Img'>
            <Link to={appLink} target="_blank"><img className='AppGoogle' src={apple} alt="" /></Link>
            <Link to={GLink} target="_blank"><img className='AppGoogle' src={Google} alt="" /></Link>
          </div>
        </div>
      </section>

      <section className='section2'>
        <div className='secondSection'>
          <div>
            <Link to="/Kipon" onClick={top}><img id='IMG' src={img1} alt="" /></Link>
            {/* <Link to="/Kipon" ><img id='IMG' src={img1} alt="" /></Link> */}
            <div className="imgRed">
              <p className='redP animationP'>Kipon</p>
              <p className='redP1 animationP'>Causal - Free</p>
            </div>
          </div>
          <div>
            <Link to="/Robotrix" onClick={top}><img id='IMG' src={img2} alt="" /></Link>
            {/* <Link to="/Robotrix" ><img id='IMG' src={img2} alt="" /></Link> */}
            <div className="imgRed">
              <p className='redP animationP'>Robotrix</p>
              <p className='redP1 animationP'>RPG - Free</p>
            </div>
          </div>
          <div>
            <Link to="/Treasurebox" onClick={top}><img id='IMG' src={img3} alt="" /></Link>
            {/* <Link to="/Treasurebox" ><img id='IMG' src={img3} alt="" /></Link> */}
            <div className="imgRed">
              <p className='redP animationP'>Treasure Box</p>
              <p className='redP1 animationP'>Adventure - Free</p>
            </div>
          </div>

          <div>
            <a href="/#ourGame">
            <div className='explore'>
              <p>Explore Our</p>
              <p>Games</p>
              <p>↓</p>
              <div id='red' className="imgRed">

              </div>
            </div>
            </a>
          </div>
        </div>
      </section>
      
      

      <section className='section3'>
        <div className='s3'>
          <h3 className={` ${div1InView ? 'ff' : ''}`} ref={div1Ref}>About Tripo</h3>
          {/* <h1 ref={ref} className='head  ff'>{inView ? "yes": "no"}Your Source for Mobile Entertainment</h1> */}
          <h1 className={`head ${div2InView ? 'ff' : ''}`} ref={div2Ref}>Your Source for Mobile Entertainment</h1>
          <p className={`paragraph ${div3InView ? 'ff' : ''}`} ref={div3Ref}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          <a href="/"><button className={` ${div3InView ? 'ff' : ''}`} ref={div3Ref} >Learn More</button></a>
          <div className='Im1'>
            <img src={img4} className={` ${div4InView ? 'fadeInUp' : ''}`} ref={div4Ref} alt="" />
            <div className="red">
            </div>
            <img src={img5} alt="" className={`${div5InView ? 'ff' : ''}`} ref={div5Ref} />
          </div>
          <h1 id="ourGame" className={`head ${div6InView ? 'ff' : ''}`} ref={div6Ref}>Our Games</h1>
          <p className={`paragraph ${div7InView ? 'ff' : ''}`} ref={div7Ref}>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
      </section>

      <section className="section4">
        <div className="mainbox">
          <div className="box1">

            <div className={`boxi ${div10InView ? 'fadeInLeft' : ''}`} ref={div10Ref}>
              <Link to="/Kipon" onClick={top}><div className="sec1">
              {/* <Link to="/Kipon" ><div className="sec1"> */}
                <div className="photo">
                  <img src={img6} alt="" />
                </div>
                <div className="pa">
                  <p className='redP '>Kipon</p>
                  <p className='redP1 '>Causal - Free</p>
                </div>
              </div></Link>
              <div className="sec2">
                <p className='paragraph'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              </div>
              <div className="sec3">
                <Link to={appLink} target="_blank"><img className='AppGoogle' src={apple} alt="" /></Link>
                <Link to={GLink} target="_blank"><img className='AppGoogle' src={Google} alt="" /></Link>
              </div>
            </div>

          </div>
          <div className="box1">

            <div className={`boxi ${div11InView ? 'fadeInLeft' : ''}`} ref={div11Ref}>
              <Link to="/Robotrix" onClick={top}><div className="sec1">
              {/* <Link to="/Robotrix" ><div className="sec1"> */}
                <div className="photo">
                  <img src={img7} alt="" />
                </div>
                <div className="pa">
                  <p className='redP '>Robotrix</p>
                  <p className='redP1 '>RPG - Free</p>
                </div>
              </div></Link>
              <div className="sec2">
                <p className='paragraph'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              </div>
              <div className="sec3">
              <Link to={appLink} target="_blank"><img className='AppGoogle' src={apple} alt="" /></Link>
                <Link to={GLink} target="_blank"><img className='AppGoogle' src={Google} alt="" /></Link>
              </div>
            </div>

          </div>
        </div>
        <div className="mainbox mainbox1">
          <div className="box1">

            <div className={`boxi ${div12InView ? 'fadeInLeft' : ''}`} ref={div12Ref}>
              <Link to="/Treasurebox" onClick={top}>
              {/* <Link to="/Treasurebox" > */}
              <div className="sec1">
                <div className="photo">
                  <img src={img8} alt="" />
                </div>
                <div className="pa">
                  <p className='redP '>Treasure Box</p>
                  <p className='redP1 '>Adventure - Free</p>
                </div>
              </div></Link>
              <div className="sec2">
                <p className='paragraph'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              </div>
              <div className="sec3">
              <Link to={appLink} target="_blank"><img className='AppGoogle' src={apple} alt="" /></Link>
                <Link to={GLink} target="_blank"><img className='AppGoogle' src={Google} alt="" /></Link>
              </div>
            </div>

          </div>
          <div className={`box2 ${div13InView ? 'fadeInRight' : ''}`} ref={div13Ref}>
            <img src={img9} alt="" />
          </div>
        </div>
      </section>

      <section className='section5'>
        <div className="fixedbg1">
          <div className="r0 r1">
            <h3 className={`redP Mar ${div8InView ? 'ff' : ''}`} ref={div8Ref}> Join Our Team</h3>
            <h1 className={`head Mar ${div9InView ? 'ff' : ''}`} ref={div9Ref}>It takes the world's best talent to change the game.</h1>
            <Link to="/Careers" onClick={top}><button className={`Mar ${div0InView ? 'ff' : ''}`} ref={div0Ref}>Explore Careers</button></Link>
            {/* <Link to="/Careers" ><button className={`Mar ${div0InView ? 'ff' : ''}`} ref={div0Ref}>Explore Careers</button></Link> */}
          </div>
          <div className="r1 r2">
            <img src={img11} className={` ${div14InView ? 'fadeInUpp' : ''}`} ref={div14Ref} alt="" />
          </div>
        </div>
        <div className="fixedbg2">
          <Contact/>
          {/* <div className="r3">
            <div className="formC formC0" id='Contact'>
              <h2>Get in Touch</h2>
              <p className="paragraph">I'm a paragraph. Click here to add your own text and edit me.</p>
              <form onSubmit={handleSubmit} >
                <div className='namediv widthHeight'>
                  <div>
                    <label className='paragraph' for="fname">First Name *</label> <br />
                    <input type="text" name="Fname" onChange={handleInputChange} value={inputValue} id="fname" className='Input In1' />
                  </div>
                  <div>
                    <label className='paragraph' for="lname">Last Name *</label> <br />
                    <input type="text" name="Lname" onChange={handleInputChange1} value={inputValue1} id="lname" className='Input In1' />
                  </div>

                </div>
                <div className='mailDiv widthHeight'>
                  <label className='paragraph' for="email">Email *</label> <br />
                  <input type="email" name="Email" onChange={handleInputChange2} value={inputValue2} id="email" className='Input In2' />
                </div>

                <div className='mailDiv widthHeight message'>
                  <label className='paragraph' for="comment">Leave us a message...</label> <br />
                  <textarea name="myText" onChange={handleInputChange3} value={inputValue3} id="comment" cols="30" rows="7"></textarea>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="r3">
            <div className="formC formC1 width">
              <h3 className='redP Mar r3h3'>Subscribe to Our Newsletter</h3>
              <form onSubmit={handleSubmit1}>
                <div >
                  <div className='mailDiv widthHeight subsDiv'>
                    <label className='paragraph' for="email">Email *</label>
                    <input type="email" name="Email" onChange={handleInputChange4} value={inputValue4} id="email" className='Input subscribeInput In1' />
                  </div>
                  <button className='BBton' type="submit">Join</button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Home