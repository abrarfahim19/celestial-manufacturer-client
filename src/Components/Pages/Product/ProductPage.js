import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shareable/Loading";

const ProductPage = () => {
    const { productId } = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Get the Item Detail
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/product/${productId}`)
    //     .then(res=> res.json())
    //     .then(data => setDetails(data))
    // },[productId])
    
/**
 * Interesting Finding 23: If you dont use optional chaining it will throw an error.... And thats logical
*/

    const {data:detail,isLoading,refetch,} = useQuery(["details",productId], () =>
        fetch(`http://localhost:5000/product/${productId}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    console.log(detail)

    if (isLoading) {
        <Loading></Loading>;
    }

    const onSubmit = () =>{

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-primary font-bold text-center mt-10">
                {detail?.name}
            </h2>
            <div className="grid grid-cols-2">
                <div>
                    <figure class="px-10 w-3/4 pt-10">
                        <img
                            src={detail?.img}
                            alt="product"
                            class="rounded-xl"
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
                    <div class="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Order
                            </span>
                        </label>
                        <input
                            {...register("order", { min: parseInt(`${detail.minQ}`), max: parseInt(`${detail.stock}`) , required: true })}
                            type="text"
                            placeholder="Order Quantity"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-600">
                                {errors.order?.type === "required" &&
                                    "A Order number is required"}
                                {errors.order?.type === "min" &&
                                    `Minimum Order ${detail.minQ}`}
                                {errors.order?.type === "max" &&
                                    `Maximum Order ${detail.stock}`}
                            </span>
                        </label>
                    </div>
                    <button type="submit" class="btn text-white btn-primary gap-2">
                    <i class="fa-solid fa-cart-shopping"></i>
                        Button
                    </button>
                </div>
            </div>
            </form>
        </div>
    );
};

export default ProductPage;
