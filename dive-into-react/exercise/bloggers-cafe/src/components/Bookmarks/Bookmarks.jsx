import Bookmark from "../Bookmark/Bookmark";
import { MdClearAll } from "react-icons/md";
const Bookmarks = ({ bookmarks, handleClearAllBookmark, readTime }) => {

    return (
        <div className='bg-gray-100 rounded-md md:w-1/3 p-3 max-h-200 overflow-y-auto shadow-md'>
            {/* Spent Time On Read */}
            <div className="bg-[rgba(96,71,236,0.1)] border-2 border-[#6047EC] rounded-sm p-3 mb-4">
                <h1 className="text-1xl font-bold text-[#6047EC] text-center">Spent time on read: {readTime} min</h1>
            </div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-1xl">Bookmarked: {bookmarks.length}</h2>
                <button onClick={() => { handleClearAllBookmark() }} ><MdClearAll className="text-4xl" /> </button>
            </div>
            {
                bookmarks.map((bookMarked, idx) => {
                    return (
                        <Bookmark key={idx} bookMarked={bookMarked}></Bookmark>
                    )
                })
            }
        </div>
    );
};

export default Bookmarks;