import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const sideBarItems = (
        <>
            {/* Not Admin */}
            <li><Link to='/dashboard'>My Profile</Link></li>
            <li><Link to='/dashboard/myorder'>My Orders</Link></li>
            <li><Link to='/dashboard/addreview'>Add A Review</Link></li>

            {/* Admin */}
            <li><Link to='/dashboard/manageorder'>Manage All Orders</Link></li>
            <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
            <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
            <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
        </>
    );
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <label
                    for="my-drawer-2"
                    class="flex object-top justify-center btn drawer-button lg:hidden"
                >
                    Open Dashboard...<i class="fa-solid fa-angles-right text-3xl text-white"></i>
                </label>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-secondary text-base-content">
                    {/* <!-- Sidebar content --> */}
                    {sideBarItems}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
