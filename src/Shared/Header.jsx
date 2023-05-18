import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showUsername, setShowUsername] = useState(false);

    const username = 'nahid'

    const  handleLogOut= () => {
        setIsLoggedIn(false)
    }

    return (
        <div className="navbar bg-gray-800 text-white h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-gray-800 font-bold">
                        <li><Link> Home</Link></li>
                        <li><Link> All Toys</Link></li>
                        <li><Link>My Toys</Link></li>
                        <li><Link> Add A Toy</Link></li>
                        <li><Link> Blogs</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Toy Cars Central</Link>
            </div>
            <div className="hidden md:flex lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link> Home</Link></li>
                    <li><Link> All Toys</Link></li>
                    <li><Link>My Toys</Link></li>
                    <li><Link> Add A Toy</Link></li>
                    <li><Link> Blogs</Link></li>
                </ul>
            </div>
            {/* user profile */}
            {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                    <img
                        src="/path/to/profile-picture.jpg"
                        alt="Profile"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        onMouseEnter={() => setShowUsername(true)}
                        onMouseLeave={() => setShowUsername(false)}
                    />
                    <div className="navbar-end w-24">
                        <Link className="btn" onClick={handleLogOut}>Log Out</Link>
                    </div>
                    {showUsername && <span>{username}</span>}
                </div>
            ) : (
                <div className="navbar-end">
                    <Link to={'/login'} className="btn">Login</Link>
                </div>
            )}


        </div>
    );
};

export default Header;