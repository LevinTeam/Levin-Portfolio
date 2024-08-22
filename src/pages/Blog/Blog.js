import React , {useState , useEffect} from 'react'

const Blog =() => {

    const blogInfo = [
        {src: '' , title: 'lorem' , paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi tempora totam corrupti, magni quo molestias nulla quasi cupiditate exercitationem rerum corporis deleniti nisi labore.'}, 
        {src: '' , title: 'lorem' , paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi tempora totam corrupti, magni quo molestias nulla quasi cupiditate exercitationem rerum corporis deleniti nisi labore.'}, 
        {src: '' , title: 'lorem' , paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi tempora totam corrupti, magni quo molestias nulla quasi cupiditate exercitationem rerum corporis deleniti nisi labore.'}, 
        {src: '' , title: 'lorem' , paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi tempora totam corrupti, magni quo molestias nulla quasi cupiditate exercitationem rerum corporis deleniti nisi labore.'}, 
    ]

    const [skeleton , setSkeleton] =useState(true)

    useEffect(() => {
            setTimeout (() => {
                setSkeleton(false)
            } , 2000)
            
    } , [])

  return (
    <div className='blog-container'>
        <div></div>
    </div>
  )
}


export default Blog;