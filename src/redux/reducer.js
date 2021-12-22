
const rootReducer = (state=[], action) =>{
    switch (action.type) {
        case 'GET_BLOG_LIST':
            // console.log(action.payload)
            return action.payload
            
            
    
        default:
            return state;
    }
}
export default rootReducer;