import React , {useState , useEffect} from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'
import ArticlesData from './ArticlesData/ArticlesData'
import { Helmet } from "react-helmet";

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
        <Helmet>
        <title>وبلاگ شرکت لوین | مقالات و نکات تخصصی طراحی وب‌سایت، سئو و امنیت
        </title>
        <meta name="description" content="در وبلاگ شرکت لوین، مقالات و نکات تخصصی در زمینه طراحی وب‌سایت، سئو، امنیت وب و توسعه ربات‌های تلگرام و دیسکورد را مطالعه کنید. با ما همراه شوید تا از جدیدترین ترندها و بهترین روش‌ها بهره‌مند شوید."></meta>
        <meta name="keywords" content="وبلاگ, مقالات طراحی وب, سئو, امنیت وب‌سایت, توسعه ربات, ربات تلگرام, ربات دیسکورد, نکات تخصصی, شرکت لوین"></meta>
        <link rel="canonical" href="https://levinteam.ir"></link>
        <meta property="og:title" content="وبلاگ شرکت لوین | مقالات و نکات تخصصی طراحی وب‌سایت، سئو و امنیت"></meta>
        <meta property="og:description" content="وب‌سایت، سئو و امنیت وب در وبلاگ شرکت لوین. همراه ما باشید تا از جدیدترین اطلاعات بهره‌مند شوید"></meta>
        <meta property="og:image" content="Images/Icon/favIcon.svg"></meta>
        <meta property="og:url" content="https://levinteam.ir/"></meta>
        </Helmet>

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
            <img src={info.imgCover} />
          </div>
          <div class="card-body">
            <h2 class="card-title">
              {info.title}
            </h2>
            <p class="card-intro">
              {info.preview}
            </p>
          </div>
        </Link>
      ))
    )}
</div>
      )
}


export default Blog;