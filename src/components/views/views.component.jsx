import React from 'react'
import './views.style.scss';


function ViewsComponent({view}) {
    return (
        <div className='view-element'>
             <div className='date'>Posted on October 6th 2021</div>
             <div>
                <div className='eye'>
                </div>
             </div>
            <div className='views'>&nbsp;&nbsp;{view} views</div>
            
        </div>
    )
}

export default ViewsComponent
