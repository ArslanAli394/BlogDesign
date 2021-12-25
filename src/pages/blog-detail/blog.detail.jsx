import React from 'react'
import { connect } from 'react-redux';
import ViewsComponent from '../../components/views/views.component';
import './blog.detail.style.scss';

const BlogDetail=({blogDetail}) => {
    let { Title,Subtitle,Image, Article,views} = blogDetail[0];
    return (
        <div className='blog-detail'>
        {
            blogDetail && 
            blogDetail.map(blog =>(    
                <span key={blog.id}>
                    <div className='view'>
                        <ViewsComponent view={views}/>
                    </div>
                    <div className='title'>
                        {Title}
                    </div>
                    <div className='subtitle'>
                        {Subtitle}
                    </div>
                    <div
                        style={{
                            position:"absolute",
                            top:"30%",
                            width:'100%',
                            height:'300px',
                            backgroundImage: `url(${Image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                    </div>
                    <div className='article'>
                        {Article}
                    </div>
                </span>
            ))
        }
        </div>
    )
}
const mapStateToProps = (state) =>({
    blogDetail : state.blogList
})
export default connect(mapStateToProps,null)(BlogDetail);

