import React from 'react';
import CustomImage from '../../components/Image/image.component';
import './contact.scss';
//social images
import fb from '../../assests/fb.png';
import twt from '../../assests/twitter.png';
import insta from '../../assests/insta.png';
import lnkdin from '../../assests/Vector.png';
import Footer from '../../components/footer/footer.component';

const Contact = ()=>{
    return(
        <>
        <div className='contact-page'>
            <div className='get-in-touch'>
                Get in touch with us for your service
            </div>
            <div className='social-links'>
                <div><CustomImage source={fb}/></div>
                <div><CustomImage source={twt}/></div>
                <div><CustomImage source={insta}/></div>
                <div><CustomImage source={lnkdin}/></div>
            </div>
            <div className='content'>
                <div className='number'>
                    <span>Help line Number</span>
                    <h3>1800 265 24 52 </h3>
                </div>
                <div className='address'>
                    <span>Address</span>
                    <h3>NH 234 Public Square San Francisco 65368</h3>
                </div>
                <div className='times'>
                    <span>We are open</span>
                    <h3>Monday to Friday 9:00 AM to  10:00  AM</h3>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;