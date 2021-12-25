import React from 'react';
import CustomImage from '../Image/image.component';
// import './navbar.logo.styles.scss';
import Image1 from '../../assests/1.png';
import './service.style.scss'
import ViewsComponent from '../views/views.component';

const Service = () =>{
    return (
        <div className='service'>
           
            <CustomImage className='service-image' source={Image1} />
            <div className='view'>
                <ViewsComponent view={563}/>
            </div>
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