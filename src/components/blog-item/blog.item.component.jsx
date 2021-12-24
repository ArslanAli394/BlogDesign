import React from 'react';
import Image from '../Image/image.component';
import ViewsComponent from '../views/views.component';
import './blog.item.style.scss'

const BlogItem =({blog})=>{
    const { Article,Image,Subtitle,Title } = blog
    console.log(Article,Image,Subtitle,Title )
    return(
        <div className='collection-item'>
            <div
                style={{
                    width:'100%',
                    height:'200px',
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
            </div>
            <div className='view'>
                <ViewsComponent/>
            </div>

         <div className='title'>{Title}</div>
         <div className='subtitle'>{Subtitle}</div>
    </div>
    )
}
export default BlogItem