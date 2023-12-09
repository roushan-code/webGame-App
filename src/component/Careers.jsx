import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Careers.scss'
import Crobo1 from './image/carrier-robo1.webp'
import Crobo2 from './image/carrier-robo2.webp'
import Crobo3 from './image/carrier-robo3.webp'
import Crobo4 from './image/carrier-robo4.webp'

const Careers = () => {
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
    return (
        <>
            <div className="Cmainbox">
                <div className={`Cbox1 ${div1InView ? 'fadeInLeft' : ''}`} ref={div1Ref}>
                    <h3 className='ch3'>Help Us Change the Way People Play</h3>
                    <h1 className='head ch1'>We’re Hiring</h1>
                    <p className='paragraph cpara'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <div className="Cbox2">
                    <h1 className="head ch1">Job Openings</h1>
                    <div className="CRedbox">
                        <div className="CB">
                            <div>
                                <img className='cimg transImg' src={Crobo1} alt="" />
                            </div>
                            <div><p className="redP crp">Community Manager</p>
                                <p className="paragraph cbp">San Francisco, CA</p></div>
                            <p className="paragraph cbp">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button className='Cbutton'>Apply</button>
                        </div>
                        <div className="CB">
                            <div>
                                <img className='cimg transImg' src={Crobo2} alt="" />
                            </div>
                            <div>
                                <p className="redP crp">QA Tester</p>
                                <p className="paragraph cbp">San Francisco, CA</p>
                            </div>
                            <p className="paragraph cbp">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button className='Cbutton'>Apply</button>
                        </div>
                        <div className="CB">
                            <div>
                                <img className='cimg transImg' src={Crobo3} alt="" />
                            </div>
                            <div><p className="redP crp">Game Designer</p>
                                <p className="paragraph cbp">San Francisco, CA</p></div>
                            <p className="paragraph cbp">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button className='Cbutton'>Apply</button>
                        </div>
                        <div className="CB">
                            <div>
                                <img className='cimg transImg' src={Crobo4} alt="" />
                            </div>
                            <div><p className="redP crp">Game Developer</p>
                                <p className="paragraph cbp">San Francisco, CA</p></div>
                            <p className="paragraph cbp">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button className='Cbutton'>Apply</button>
                        </div>
                    </div>

                </div>
                <div className="Cbox3">
                    <div className={`CB3 ${div2InView ? 'ff' : ''}`} ref={div2Ref}>
                        <h3 className='ff ch3'>Didn’t Find the Position You’re Looking For? </h3>
                        <h1 className='head ch1'>Send Us Your CV</h1>
                        <button className='paragraph'>Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Careers