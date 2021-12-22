import React from 'react';
import Image from '../Image/image.component';

const BlogItem =({blog})=>{
    const { Article,Image,Subtitle,Title } = blog
    console.log(Article,Image,Subtitle,Title )
    return(
        <div className='collection-item'>
        
    {/* <div
      className='image'
      style={{
        backgroundImage: `url(${Image})`
      }}
    /> */}
    {/* <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div> */}
  </div>
    )
}
export default BlogItem