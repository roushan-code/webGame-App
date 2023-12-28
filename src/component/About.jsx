import React from 'react'
import './About.scss'
import { useInView } from 'react-intersection-observer';
import founder1 from './image/founder1.webp'
import founder2 from './image/founder2.webp'
import founder3 from './image/founder3.webp'
import founder4 from './image/founder4.webp'
import aboutBilli from './image/abbilli.webp'
import { Link } from 'react-router-dom'

const top = ()=>window.screenTop();

const About = () => {
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
    return (
        <>
            <div className="Amainbox">
                <div className={`Abox1 ${div1InView ? 'fadeInLeft' : ''}`} ref={div1Ref}>
                    <h2 className='ah2'>We Are Tripo</h2>
                    <h1 className='head ah1'>We're creating the best in interactive entertainment by making games that change the way people have fun.</h1>
                </div>
                <div className="Abox2">
                    <div className="ab1"></div>
                    <div className="ab2">
                        <p className={`paragraph abp1 ${div2InView ? 'fadeInLeft' : ''}`} ref={div2Ref}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.<br /> <br />
                            This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your              company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what               makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                    </div>
                </div>
                <div className="Abox3">
                    <div className="sub-Abox3">
                    <h1 className={`head ah1 ah1-b3 ${div3InView ? 'ff' : ''}`} ref={div3Ref}>What We Are About</h1>
                    <div className="ab3">
                        <div className={`ab4 ${div4InView ? 'fadeInLeft' : ''}`} ref={div4Ref}>
                            <div className="ab5">
                                <h2 className='ah2'>Accomplishment</h2>
                                <p className='paragraph abp2'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            </div>
                            <div className="ab5">
                                <h2 className='ah2'>Creativity</h2>
                                <p className='paragraph abp2'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            </div>
                        </div>
                        <div className={`ab6 ${div5InView ? 'fadeInLeft' : ''}`} ref={div5Ref}>
                            <h2 className='ah2'>Community</h2>
                            <p className='paragraph abp2'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="Abox4">
                    <h1 className={`head ah1 ${div6InView ? 'ff' : ''}`} ref={div6Ref}>Meet the Founders</h1>
                    <div className={`ab7 ${div7InView ? 'fadeInUp' : ''}`} ref={div7Ref}>
                        <div className="foundBox1">
                            <div className='rrrr'>
                                <img className='abImage' src={founder1} alt="" />
                                <div className="abred"></div>
                            </div>
                            <h3 className='abh3'>Daisy Suarez</h3>
                            <p className='paragraph'>CTO</p>
                        </div>
                        <div className="foundBox1">
                            <div>
                                <img className='abImage' src={founder2} alt="" />
                                <div className="abred"></div>
                            </div>
                            <h3 className='abh3'>Daisy Suarez</h3>
                            <p className='paragraph'>Senior Game Developer</p>
                        </div>
                        <div className="foundBox1">
                            <div>
                                <img className='abImage' src={founder3} alt="" />
                                <div className="abred"></div>
                            </div>
                            <h3 className='abh3'>Tao Deng</h3>
                            <p className='paragraph'>Senior Game Designer</p>
                        </div>
                        <div className="foundBox1">
                            <div>
                                <img className='abImage' src={founder4} alt="" />
                                <div className="abred"></div>
                            </div>
                            <h3 className='abh3'>Ben Singleton</h3>
                            <p className='paragraph'>Senior Game Developer</p>
                        </div>
                    </div>
                </div>
                <div className="Abox5">
                    <div className={`ab8 ${div8InView ? 'fadeInLeft' : ''}`} ref={div8Ref}>
                        <div className="ab9">
                            <h3  className='abh3'>Our Offices</h3>
                            <h1  className='head ah1'>Our Studio in San Francisco</h1>
                            <p className='paragraph'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                    <div className={`ab10 ${div8InView ? 'fadeInLeft' : ''}`} ref={div8Ref}>
                        <div className="ab11">
                            <img src={aboutBilli} alt="" />
                            <h3 className='abh3'>We’d Love to Work With You</h3>
                            <p className='paragraph'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            <Link to="/Careers" onClick={top}><button className='paragraph'>Explore Opportunities</button></Link>
                            {/* <Link to="/Careers" ><button className='paragraph'>Explore Opportunities</button></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About