import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shareable/Loading";
import User from "./User";

const MakeAdmin = () => {
    const {data: users,isLoading,refetch,} = useQuery("user", () =>
        fetch("https://celestial123.herokuapp.com/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-2xl text-center my-5">All Users: {users?.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company Details and Role</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                           users?.map(user=><User
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;
