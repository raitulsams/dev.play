import PropTypes from 'prop-types';
import { TbBookmarks } from "react-icons/tb";
const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    console.log(blog);
    const { id, title, cover, author_img, posted_date, reading_time, hashtags } = blog
    return (
        <div className='p-3 mb-4 shadow-md rounded-md'>
            <img className='w-full rounded-md mb-5' src={cover} alt={`Cover of ${title}`} />
            <div className='flex justify-between m-1'>
                <div className='flex items-center space-x-2'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold'>{blog.author}</h2>
                        <p className='text-xs text-gray font-light'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => { handleAddToBookmarks(blog) }} className='font-bold text-3xl'> <TbBookmarks /></button>
                </div>
            </div>
            <div className='space-y-3'>
                <h1 className='text-xl font-bold'>{title}</h1>
                <div>
                    {
                        hashtags.map((hashtag, idx) => {
                            return (
                                <span key={idx} className='bg-amber-200 text-sm font-semibold text-gray-800 p-1 rounded-lg m-1'><a href="#">{hashtag}</a></span>
                            )
                        })
                    }
                </div>
                <div>
                    <button onClick={() => handleMarkAsRead(reading_time, id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Mark as read</button>
                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;