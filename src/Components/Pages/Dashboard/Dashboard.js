import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from '../../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const sideBarItems = (
        <>
            {/* Not Admin */}
            <li><Link to='/dashboard'>My Profile</Link></li>

            {/* Admin */}
            {
                admin
                ?
                <>
                    <li><Link to='/dashboard/manageorder'>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                    <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                    <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                </>
                : 
                <>
                    <li><Link to='/dashboard/myorder'>My Orders</Link></li>
                    <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
                </>
            }
        </>
    );
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label
                    for="my-drawer-2"
                    className="flex object-top justify-center btn drawer-button lg:hidden"
                >
                    Open Dashboard...<i className="fa-solid fa-angles-right text-3xl text-white"></i>
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-secondary text-base-content">
                    {/* <!-- Sidebar content --> */}
                    {sideBarItems}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
