import axios from "axios";

export const getBlogList =()=>(dispatch)=>{
     axios.get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
          .then(({data})  => {
             
              dispatch({
                type:'GET_BLOG_LIST',
                payload:data
            })
        });
}
