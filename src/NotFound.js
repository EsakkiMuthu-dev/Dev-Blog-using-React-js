import { Link } from "react-router-dom";

const NotFound= () => {
    return ( 
        <div>
            <h2>sorry</h2>
            <p>Page not Found</p>
            <Link to='/' >Back to the Home page</Link>
        </div>
     );
}
 
export default NotFound;