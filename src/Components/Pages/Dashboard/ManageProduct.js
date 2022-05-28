import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shareable/Loading';
import AdminProductRow from './AdminProductRow';

const ManageProduct = () => {
    const {data: products,isLoading,refetch,} = useQuery("allProduct", () =>
        fetch(`https://celestial123.herokuapp.com/product/`, {
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
            <h2 className="text-2xl">All orders: {products?.length}</h2>
            <div class="overflow-x-auto w-full">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>name</th>
                            <th>Price</th>
                            <th>Minimum Quantity</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                           products?.map(product=> <AdminProductRow
                           key={product._id}
                           product={product}
                           refetch={refetch}
                           >
                           </AdminProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;