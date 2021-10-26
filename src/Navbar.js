import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <a href='/'><h1>MY REACT BLOG</h1></a>
        
            </div>       
            <div className="links">
        
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
  
            </div>

        </nav>
     );
}
 
export default Navbar;