import React , {useState , useEffect} from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'
import ArticlesData from './ArticlesData/ArticlesData'

const Blog =() => {

  const [articles , setArticle] = useState(ArticlesData)

    const [skeleton , setSkeleton] =useState(true)

    useEffect(() => {
            setTimeout (() => {
                setSkeleton(false)
            } , 2000)
    } , [])

  return (
<div className='blog-container'>

    {skeleton ? (
      articles.map( (info)=> (
        <div class="blog-card" key={info.id}>
      <div class="card-img skeleton">

      </div>
      <div class="card-body">
        <h2 class="card-title skeleton">

        </h2>
        <p class="card-intro skeleton">

        </p>
      </div>
    </div>
      ))
    ) : (
      articles.map( (info) => (
          <Link to={`/Blog/${info.id}`} class="blog-card" key={info.id} >
          <div class="card-img">
            <img src="https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg" />
          </div>
          <div class="card-body">
            <h2 class="card-title">
              {info.title}
            </h2>
            <p class="card-intro">
              {info.paragraph}
            </p>
          </div>
        </Link>
      ))
    )}
</div>
      )
}


export default Blog;