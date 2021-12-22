import React from 'react';
import './header.left.styles.scss';

//images
import ImageOne from '../../assests/Image.png';
const HeaderLeft =()=>{
    return (
        <div>
            <img
                className='background-image'
                src={ImageOne}
                alt='img1'
            />
            <div className='overlay'>
                
            </div>
            <h1>Our Blog</h1>
            <div className='header-right'>
                <h4>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
                <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
            </div>
        </div>
    )
}
export default HeaderLeft;