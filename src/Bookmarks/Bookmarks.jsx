import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmark, redingTime}) => {
    
    return (
        <div className="md:w-1/3 border border-red-700 bg-gray-400 pt-5 mt-5 ml-5   ">
            <h1 className="text-4xl text-center bg-violet-400 ">redingTime {redingTime}</h1>
            <h1 className="text-3xl text-center">Booksmarks: {bookmark.length}</h1>
            {
                bookmark.map(bookmark => <Bookmark key={bookmark.id} bookmark= {bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array
}

export default Bookmarks;
