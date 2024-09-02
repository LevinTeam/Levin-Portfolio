import React from 'react'
import './SinglePageBlog.css'
import { useParams } from 'react-router-dom'
import ArticlesData from '../ArticlesData/ArticlesData'
import { Helmet } from "react-helmet";

 const SinglePageBlog = () =>  {

    let params = useParams()
    
    const blogData = ArticlesData.find(data => data.id == params.SinglePageBlogID)
    
    return (
      <div className='blog-page-container'>
        <Helmet>
          <title>{blogData.title}</title>
          <meta name="description" content={blogData.description}></meta>
          <meta name="keywords" content={blogData.keywords}></meta>
          <link rel="canonical" href="https://localhost:3000"></link>
          <meta property="og:title" content={blogData.ogTitle}></meta>
          <meta property="og:description" content={blogData.ogDescription}></meta>
          <meta property="og:image" content={blogData.imgCover}></meta>
          <meta property="og:url" content="https://localhost:3000/"></meta>
        </Helmet>
        <h2>{blogData.title}</h2>
        <img src={blogData.imgHeader} alt={blogData.imgCoverAlt} title={blogData.title} />
        <hr />
        <div className='paragraph-container'>
          {
          blogData.content.map((paragraph , index) => (
            <div key={index} className='paragraph-div'>
              <h2> {paragraph.heading} </h2>
            <p> {paragraph.paragraph} </p>
            {paragraph.img ? (<img src={paragraph.img} alt={paragraph.alt} title={paragraph.heading}/>) : (<></>)}
            </div>
          ))
          }
        </div>

    </div>
  )
}

export default SinglePageBlog;