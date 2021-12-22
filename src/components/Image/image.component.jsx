import React from 'react';

const Image = ({source,otherprops}) =>{
    return (
        <img src={source} alt={source} {...otherprops}/>
    )
}
export default Image;