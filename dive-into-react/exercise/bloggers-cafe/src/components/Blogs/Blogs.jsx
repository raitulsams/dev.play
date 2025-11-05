import React, { use } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Blog from '../Blog/Blog'
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3'>
            {/* <div>Blogs: {blogs.length}</div> */}
            {
                blogs.map(blog => {
                    return (
                        <Blog handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks} key={blog.id} blog={blog}></Blog>
                    )
                })
            }
        </div>
    );
};
Blogs.protoType = {
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;