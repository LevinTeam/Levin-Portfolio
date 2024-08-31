import React from 'react'
import './SinglePageBlog.css'
import { useParams } from 'react-router-dom'
import ArticlesData from '../ArticlesData/ArticlesData'

 const SinglePageBlog = () =>  {

    let params = useParams()
    
    const blogData = ArticlesData.find(data => data.id == params.SinglePageBlogID)
    
    return (
      <div className='blog-page-container'>
        <h2>{blogData.title}</h2>
        <img src={blogData.imgHeader} alt="" />
        <hr />
        <div className='paragraph-container'>
          {
          blogData.content.map((paragraph , index) => (
            <div key={index} className='paragraph-div'>
              <h5> {paragraph.heading} </h5>
            <p> {paragraph.paragraph} </p>
            </div>
          ))
          }
        </div>

    </div>
  )
}

export default SinglePageBlog;