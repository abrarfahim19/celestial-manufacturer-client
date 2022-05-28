import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shareable/Loading';
import AdminOrder from './AdminOrder';

const ManageOrder = () => {
    const {data: orders,isLoading,refetch,} = useQuery("allOrder", () =>
        fetch(`https://celestial123.herokuapp.com/order/`, {
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
            <h2 className="text-2xl">All orders: {orders?.length}</h2>
            <div class="overflow-x-auto w-full">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Payable</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                           orders?.map(order=> <AdminOrder
                           key={order._id}
                           order={order}
                           refetch={refetch}
                           >
                           </AdminOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;