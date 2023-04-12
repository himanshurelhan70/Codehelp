import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='p-4 rounded-lg shadow-xl bg-[#dfdfdf] hover:scale-[1.02] transition-all duration-300'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='text-xl font-bold hover:underline transition-all duration-200'>{post.title}</span>
      </NavLink>
      <p className='my-[2px]'>
        By <span className='italic'>{post.author}</span> on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-bold text-sm'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm'> Posted on {post.date} </p>
      <p className='text-justify my-4'> {post.content}</p>
      <div className='flex flex-wrap'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-700 font-[600] text-sm underline mr-2'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
