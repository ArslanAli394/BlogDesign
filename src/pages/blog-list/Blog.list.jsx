import React from 'react';
import { connect } from 'react-redux';
import BlogItem from '../../components/blog-item/blog.item.component';
import { getBlogList } from '../../redux/action';
import './blog.list.style.scss';

class BlogList extends React.Component{
   constructor(props){
       super(props);
       this.state ={
           blogList:[]
       }
   }
    componentDidMount(){
    //    axios.get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/").then(({data})=>{
    //        this.setState({
    //            blogList:data
    //        })
    //    })
    this.props.getBlogList()
    }
   
    
    render(){

        const {blogList} = this.props;
        console.log(blogList)
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
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    blogList: state.blogList
})

export default connect(mapStateToProps,{getBlogList})(BlogList);
