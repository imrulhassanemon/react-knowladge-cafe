import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";


const Blog = ({blog, handelClickBtn, handelReadingTime}) => {
    // console.log(blog);
    const {title, cover, author, reading_time, posted_date, author_img, hashtags } = blog;
    return (
        <div className='border border-red-600 mb-20'>
            <img className='w-full mb-8' src={cover} alt= {`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <h2>{posted_date}</h2>
                    </div>
                </div>
                <div>
                    <span className='flex'>{reading_time} min read <button
                    onClick={() => handelClickBtn(blog)}
                    className='ml-2'><IoBookmarkOutline></IoBookmarkOutline></button> </span>
                </div>
            </div>
            <h1 className="text-4xl">Title {title}</h1>
            <p>
                {
                    hashtags.map((hash, id) => <span key={id}> <a href="">#{hash}</a> </span> )
                }
            </p>
            <button
                onClick={() => handelReadingTime(reading_time)}
             className='text-purple-700 font-bold underline'>Read time</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handelClickBtn: PropTypes.func,
    handelReadingTime: PropTypes.func
}

export default Blog;