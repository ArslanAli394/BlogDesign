import React from 'react';
import Header from '../../components/header/header.component';
import BlogList from '../blog-list/Blog.list';
import BlogPageService from '../service/blog.page.service';


const BlogPage = () =>{
    return (
        <div>

            <Header/>
            <BlogPageService/>
            <BlogList/>
        </div>
    )   
}
export default BlogPage;