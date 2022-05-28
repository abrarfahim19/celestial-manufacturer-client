import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../Shareable/Loading';
import PaymentCard from './PaymentCard';
import UserOrder from './UserOrder';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [stripePromise, setStripePromise] = useState(() => loadStripe("pk_test_51L45lUGe7ng92uQR0NcKnsh07VUR0s6LszR0qAi9nVKJIEiSLvvgfn0aMHUHcjvFNz42SNFfWYxItlNCr3YHUIxx00UU3Kll5H"))
    const [payData, setPaydata] = useState({});
    const {data: orders,isLoading,refetch,} = useQuery("order", () =>
        fetch(`https://celestial123.herokuapp.com/order/${user.email}`, {
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
            <h2 className="text-2xl text-center my-5">All orders: {orders?.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
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
                           orders?.map(order=> <UserOrder
                           key={order._id}
                           order={order}
                           refetch={refetch}
                           setPaydata={setPaydata}
                           >
                           </UserOrder>)
                        }
                    </tbody>
                </table>
            </div>
            <Elements stripe={stripePromise} >
                <PaymentCard refetch={refetch} payData={payData}></PaymentCard>
            </Elements>
        </div>
    );
};

export default MyOrder;