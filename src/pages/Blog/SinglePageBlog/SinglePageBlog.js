import React from 'react'
import './SinglePageBlog.css'
import { useParams } from 'react-router-dom'
import ArticlesData from '../ArticlesData/ArticlesData'

 const SinglePageBlog = () =>  {

    let params = useParams()
    
    const blogData = ArticlesData.find(data => data.id == params.SinglePageBlogID)
    console.log(blogData);


  return (
    <div className='blog-page-container'>
        <h2>{blogData.title}</h2>
        <img src='https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg' alt="" />
        <hr />
        <div className='paragraph-container'>
          <p>{blogData.content}</p>
        </div>

    </div>
  )
}

export default SinglePageBlog;