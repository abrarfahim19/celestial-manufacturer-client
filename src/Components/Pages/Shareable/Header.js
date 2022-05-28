import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    //Logout + Remove Token
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    if(user){
        console.log(user);
    }

    const navItems = (
        <>
            {/* Always Display */}
            <li className="font-semibold"><Link to="/">Home</Link></li>
            <li className="font-semibold"><Link to="/product">Products</Link></li>
            <li className="font-semibold"><Link to="/myportfolio">My Portfolio</Link></li>
            <li className="font-semibold"><Link to="/blog">Blog</Link></li>
            
            {
                user ?
                <>
                    {/* Logged In Display */}
                    <li className="font-semibold"><Link to="/dashboard">Dashboard</Link></li>
                </>
                :
                <>
                    {/* Logged Out Display */}
                    <li className="font-semibold"><Link to="/login">Login</Link></li>
                    <li className="font-semibold"><Link to="/register">Register</Link></li>
                </>
            }
            
        </>
    );
    const avatarIcon =(
        <>
            {
                user &&
                <div className="">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" alt="avatar"/>
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/dashboard"> My Profile</Link>
                            </li>
                            <li>
                                <button onClick={logout} className="btn btn-outline">{user.displayName} (Log Out)</button>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </>
    );
    return (
        <div className="navbar bg-gradient-to-r from-primary to-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-bold normal-case text-xl">Celestial Manufacturer</Link>
            </div>
            <div className="navbar-end ">
                <ul className="menu hidden lg:flex menu-horizontal p-0">{navItems}</ul>
            {
                avatarIcon
            }
            </div>
        </div>
    );
};

export default Header;
