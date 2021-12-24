import React from 'react';

const CustomImage = ({source,otherprops}) =>{
    return (
        <img src={source} alt={source} {...otherprops}/>
    )
}
export default CustomImage;