import React from 'react'
import { useInView } from 'react-intersection-observer';
import img6 from './image/6th_img.webp'
import kipon1 from './image/Kipon1.webp'
import kipon2 from './image/kipon2.webp'
import { AiFillStar } from "react-icons/ai";
import apple from './image/AppleStore.webp'
import Google from './image/GooglePlay.webp'

import './kipon.scss'


const Kipon = () => {
    const [div10Ref, div10InView] = useInView({
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
    return (
        <>
            <div className="fakebox"></div>
            <div className="Kbox1">
                <div className={`boxi kboxi ${div10InView ? 'fadeInLeft' : ''}`} ref={div10Ref}>
                    <div className="sec1 ksec1">
                        <div className="photo">
                            <img src={img6} alt="" />
                        </div>
                        <div className="pa">
                            <p className='redP '>Kipon</p>
                            <p className='redP1 '>Causal - Free</p>
                        </div>
                    </div>
                    <div className="ksec3">
                        <h1 className='head kh1'>A One-of-a-Kind Game That Offers Endless Excitement at Your Fingertips.</h1>
                    </div>
                    <div className="sec2 ksec2">
                        <p className='paragraph'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
            </div>
            <div className="Kbox2">
                <div className="ksub-box2">
                    <h2 className='kh2'>Screenshots</h2>
                    <div className="ksec4">
                        <div className="k-img1">
                            <img src={kipon1} alt="" />
                        </div>
                        <div className="k-img1">
                            <img src={kipon2} alt="" />
                        </div>
                    </div>
                    <div className="ksec5">
                        <div className="star-box1">
                            <div className="star-box2">
                                <AiFillStar />
                                <div className="star-box3"><p className='paragraph '>4.1 Rating</p></div>
                            </div>
                        </div>
                        <h1 className='head kh1'>Reviews</h1>
                    </div>
                    <div className="ksec6">
                        <div className="write-box1">
                            <p className='paragraph'>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
                            <h3 className='kbh3'>Wang Wai</h3>
                        </div>
                        <div className="write-box1 wb1">
                            <p className='paragraph'>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
                            <h3 className='kbh3'>Jose Pablo</h3>
                        </div>
                        <div className="write-box1">
                            <p className='paragraph'>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
                            <h3 className='kbh3'>Priya Gunga</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Kbox5">
                <div className="kb5-content">
                    <h1 className={`head kh1-b5 ${div6InView ? 'ff' : ''}`} ref={div6Ref}>Challenge a Friend or Race Against the Clock as You Battle Through 20 Levels of Endless Fun</h1>
                    <p className={`paragraph kp-b5 ${div7InView ? 'ff' : ''}`} ref={div7Ref}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
            </div>
            <div className="Kbox6">
                <div className={`ksec7 ${div8InView ? 'ff' : ''}`} ref={div8Ref}>
                    <h1 className='head kh1'>Play Now</h1>
                    <div className="sec3 play-img">
                        <img className='AppGoogle' src={apple} alt="" />
                        <img className='AppGoogle' src={Google} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kipon