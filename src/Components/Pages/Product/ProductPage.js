import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shareable/Loading";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ProductPage = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Get the Item Detail
    // useEffect(()=>{
    //     fetch(`https://celestial123.herokuapp.com/product/${productId}`)
    //     .then(res=> res.json())
    //     .then(data => setDetails(data))
    // },[productId])

    /**
     * Interesting Finding 23: If you dont use optional chaining it will throw an error.... And thats logical
     */

    const {
        data: detail,
        isLoading,
        refetch,
    } = useQuery(["details", productId], () =>
        fetch(`https://celestial123.herokuapp.com/product/${productId}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    console.log("item", detail);

    if (isLoading) {
        <Loading></Loading>;
    }

    const onSubmit = async (data) => {
        const ordered = data.order;
        const stock = parseInt(detail.stock) - parseInt(ordered);
        const update = { stock: stock };
        fetch(`https://celestial123.herokuapp.com/product/${productId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(update),
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            if (result.modifiedCount) {
                const order = {
                    name: detail.name,
                    email:user.email,
                    qunatity: ordered,
                    toPay: ordered * parseInt(detail.price),
                    status:"pending"
                };
                fetch("https://celestial123.herokuapp.com/order", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                    body: JSON.stringify(order),
                })
                .then((res) => res.json())
                .then((inserted) => {
                    if (inserted.insertedId) {
                        toast.success("Order Has been Added");
                        reset();
                    } else {
                        toast.error("Order Add failed...");
                    }
                });
                refetch();
            }
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl text-primary font-bold text-center mt-10">
                    {detail?.name}
                </h2>
                <div className="grid grid-cols-2">
                    <div>
                        <figure className="px-10 w-3/4 pt-10">
                            <img
                                src={detail?.img}
                                alt="product"
                                className="rounded-xl"
                            />
                        </figure>
                    </div>
                    <div className="px-10 pt-10">
                        <h3 className="text-xl text-black font-semibold mb-2 ">
                            {" "}
                            Product ID: {productId}
                        </h3>
                        <h3 className="text-xl text-black font-semibold mb-2 ">
                            {" "}
                            Price: {detail?.price}
                        </h3>
                        <h3 className="text-xl text-black font-semibold mb-2 ">
                            {" "}
                            Minimum Purchase Order: {detail?.minQ}
                        </h3>
                        <h3 className="text-xl text-black font-semibold mb-2 ">
                            {" "}
                            Product In Stock: {detail?.stock}
                        </h3>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Order
                                </span>
                            </label>
                            <input
                                {...register("order", {
                                    min: parseInt(`${detail?.minQ}`),
                                    max: parseInt(`${detail?.stock}`),
                                    required: true,
                                })}
                                type="number"
                                placeholder="Order Quantity"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                    {errors.order?.type === "required" &&
                                        "A Order number is required"}
                                    {errors.order?.type === "min" &&
                                        `Minimum Order ${detail?.minQ}`}
                                    {errors.order?.type === "max" &&
                                        `Maximum Order ${detail?.stock}`}
                                </span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn text-white btn-primary gap-2"
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                            Order
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductPage;
