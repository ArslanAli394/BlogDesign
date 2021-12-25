import React from 'react';
import { connect } from 'react-redux';
import BlogItem from '../../components/blog-item/blog.item.component';
import CustomButton from '../../components/custom-button/custom.button.component';
import { getBlogList } from '../../redux/action';
import './blog.list.style.scss';

class BlogList extends React.Component{
   constructor(props){
       super(props);
       this.state ={
           blogList:[],
           flag:true
       }
   }
    componentDidMount(){
        this.props.getBlogList();
           
    }
   
    
    render(){

        const {blogList} = this.props;
        return(
            <div className='collection-preview'>
            <div className='preview'>
                
            {
                blogList && 
                blogList.filter((blog,idx)=> idx <6 ).map(blog=>(
                    <BlogItem key={blog.id} blog={blog}/>
                ))
            }
            </div>
                
                <CustomButton className='load-button-container'>Load More</CustomButton>
                
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    blogList: state.blogList
})

export default connect(mapStateToProps,{getBlogList})(BlogList);
