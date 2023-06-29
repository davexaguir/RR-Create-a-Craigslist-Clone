import React from 'react'
import Post from './post'
import {Postings} from '../postings'

function Gallery(){
    let postList = Postings.map((data, i) => {
        return <Post data={data} key={i}/>
    })
    return (
        <div className='gallery'>
            <h1>Gallery</h1>
            {postList}
        </div>
    )
}

export default Gallery