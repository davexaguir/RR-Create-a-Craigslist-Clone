import React from 'react'

function Post(props){
    return (
        <div className='post'>
            
            <h1>{props.data.title}</h1>
            <img src={props.data.imageURL} alt='Item'></img>
        </div>
    )
}

export default Post