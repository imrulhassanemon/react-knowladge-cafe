import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handelClickBtn, handelReadingTime }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3 pt-5">
            {/* <h1 className="text-4xl">blogs{blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog
                    handelReadingTime = {handelReadingTime} 
                     handelClickBtn = {handelClickBtn}
                     key={blog.id} blog={blog}
                     
                     ></Blog>)
            }
        </div>
    );
};

export default Blogs;
Blogs.propTypes = {
    blog : PropTypes.object.isRequired,
    handelClickBtn: PropTypes.func ,
    handelReadingTime: PropTypes.func

}