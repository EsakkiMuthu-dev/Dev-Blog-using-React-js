
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    // @ts-ignore
    const { id } = useParams()
    const {datas:blog,ispending,error} = useFetch('http://localhost:5000/blogs/'+id)
    const history = useHistory()
    const handleDelete = ()=>{
        fetch('http://localhost:5000/blogs/'+ blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    } 


    return ( 
       
        <div  >  
        {ispending && <div> Loading....</div>} 
        {error && <div> {error}</div>}
        {blog && <div className='blogdetail' > 
        <h2>{blog.title}</h2> 
        <p>Written by {blog.author}</p>   
        <p>{blog.body}</p>  
     
        <button className='delete' onClick={handleDelete}>Delete</button>  </div> 
         }
        </div>  
     );
}
 
export default BlogDetails;