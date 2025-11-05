import PropTypes from "prop-types";

const Bookmark = ({ bookMarked }) => {
    return (
        <div className="bg-gray-800 rounded-md p-3 mb-4 shadow-md">
            <h2 className="text-1xl font-bold text-white">{bookMarked.title} </h2>
            <h4 className="text-sm text-white">Author: {bookMarked.author} </h4>
            <h4 className="text-sm text-white">Reading Time: {bookMarked.reading_time} </h4>
        </div>
    );
};

Bookmark.propTypes = {
    bookMarked: PropTypes.object
}
export default Bookmark;