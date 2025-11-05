import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Bookmarks from './components/Bookmarks/Bookmarks.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const [bookmarks, setBookmarks] = useState([])
  const [readTime, setReadTime] = useState(0)
  const handleAddToBookmarks = (blog) => {
    // console.log("Bookmarks adding: ", blog);
    const newBooksmarks = [...bookmarks, blog]
    setBookmarks(newBooksmarks)
    console.log("Bookmarks: ", bookmarks);
  }
  const handleClearAllBookmark = () => {
    setBookmarks([])
    setTimeout(function () {
      alert('Bookmarks cleared');
    }, 1000);
  }
  const handleMarkAsRead = (time, id) => {
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
    // console.log("Mark as read: ", id);
    const newReadTime = readTime + time
    setReadTime(newReadTime)
  }

  return (
    <>
      <title>Bloggers Cafe</title>
      <div className='max-w-5xl mx-auto'>
        <Header></Header>
        <div className='mx-auto md:space-x-2 md:flex md:justify-between'>
          <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <Bookmarks readTime={readTime} handleClearAllBookmark={handleClearAllBookmark} bookmarks={bookmarks}></Bookmarks>
        </div >
      </div>
    </>
  )
}

export default App
