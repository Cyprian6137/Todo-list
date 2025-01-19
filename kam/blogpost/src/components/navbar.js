import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h2>Blog post</h2>
            <div className="links">
                <Link to="/"  className="nav-links">Home</Link>
                <Link to="/newblog" className="nav-links">new Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;