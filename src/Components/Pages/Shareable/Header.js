import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const navItems = (
        <>
            {/* Always Display */}
            <li className="font-semibold"><Link to="/">Home</Link></li>
            <li className="font-semibold"><Link to="/myportfolio">My Portfolio</Link></li>
            <li className="font-semibold"><Link to="/blog">Blog</Link></li>
            
            {/* Logged In Display */}
            <li className="font-semibold"><Link to="/purchase">Purchase</Link></li>
            <li className="font-semibold"><Link to="/dashboard">Dashboard</Link></li>
            
            {/* Logged Out Display */}
            <li className="font-semibold"><Link to="/login">Login</Link></li>
            <li className="font-semibold"><Link to="/register">Register</Link></li>
        </>
    );
    return (
        <div class="navbar bg-gradient-to-r from-primary to-secondary">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="navbar-end ">
                <ul class="menu hidden lg:flex menu-horizontal p-0">{navItems}</ul>
            <div class="">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul
                        tabindex="0"
                        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;
