// we are going use props in this component

import { Link } from "react-router-dom";

//now we are going to filter an array and display it
const BlockList = ({blogs,title}) => {
    // const blogs = props.blog
    // const title = props.head  instead of using props  we can desturcture it and get what we need

    return (
    <div className="bloglist">
    <h2>{title}</h2>
        {blogs.map((blog)=>(             
        <div className='blogPreview' key={blog.id}>
        <Link to ={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p> written by {blog.author}</p>
            </Link>
        </div>
        )
        )
    }
    </div>
      );
}
 
export default BlockList;