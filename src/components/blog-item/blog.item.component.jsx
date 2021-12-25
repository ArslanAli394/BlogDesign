import React from 'react';
import { NavLink } from 'react-router-dom';
import ViewsComponent from '../views/views.component';
import './blog.item.style.scss'
import { connect } from 'react-redux';
import { getSingleBlog } from '../../redux/action';

const BlogItem =({blog,singleBlog})=>{
    const { id,Article,Image,Subtitle,Title,views } = blog
    console.log(Article,Image,Subtitle,Title )
    return(
        <div className='collection-item'>
            <NavLink activeClassName="active" to={`/blog/${id}`} onClick={()=>singleBlog(id)}>
                <div
                    style={{
                        width:'100%',
                        height:'200px',
                        backgroundImage: `url(${Image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                </div>
            </NavLink>
            
            <div className='view'>
                <ViewsComponent view={views}/>
            </div>

         <div className='title'>{Title}</div>
         <div className='subtitle'>{Subtitle}</div>
    </div>
    )
}
const mapDispatchToProps = (dispatch) =>(   {
    singleBlog : (id) => dispatch(getSingleBlog(id))
})
export default connect(null,mapDispatchToProps)(BlogItem);