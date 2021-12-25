
const rootReducer = (state=[], action) =>{
    switch (action.type) {
        case 'GET_BLOG_LIST':
            state = action.payload;
            state.map(blog =>(
                blog.views = 563
            ))
            return state;
        case "SINGLE_BLOG":
            let singleBlog = state.filter(blog=> blog.id === action.payload && blog.views++)
            return singleBlog;
        default:
            return state;
    }
}
export default rootReducer;