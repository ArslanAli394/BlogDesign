import React from 'react';
import Image from '../Image/image.component';
// import './navbar.logo.styles.scss';
import Image1 from '../../assests/1.png';
import './service.style.scss'

const Service = () =>{
    return (
        <div className='service'>
           
            <Image className='service-image' source={Image1} />
            
            <div className='date'>Posted on October 6th 2021</div>
            <div className='eye'>
            </div>
            <div className='views'>563 views</div>
            <div className='feature'>FEATURED</div>
            <div className='content'>
                <div>
                <div className='heading'>
                    Should I Buy a New Car or Lease a New Car in 2021?
                </div>
                <div className='para'>
                We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. 
                This includes, We provide a full range of front end mechanical.
                </div>
                </div>
                <div className='read-more'>
                    Read more &#8594;
                </div>
            </div>
            {/* <div>heading</div>
            <div>heading</div> */}
        </div>
    )
}
export default Service;