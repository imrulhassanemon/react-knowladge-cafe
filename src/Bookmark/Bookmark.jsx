import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div >
            <h2 className="text-2xl bg-slate-200 m-5 p-4 rounded-md "> {title} </h2>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;