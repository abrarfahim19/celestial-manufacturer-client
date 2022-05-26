import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const apiKey = "6b66c6b98712999f8b6bbde17344eff2";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        console.log();
    };

    return (
        <>
            <div class="m-5 lg:mx-32 avatar">
                <div class="w-32 rounded">
                    <img
                        src="https://api.lorem.space/image/face?hash=88560"
                        alt="avatar"
                    />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-5 lg:mx-32 grid grid-cols-2">
                    <div>
                        <div class="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Name
                                </span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                    {errors.name?.type === "required" &&
                                        "A Product Name is required"}
                                </span>
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                        <label className="label">
                                <span className="label-text font-semibold">
                                    Product Price
                                </span>
                            </label>
                            <input
                                {...register("price", { required: true})}
                                type="text"
                                placeholder="Product Price"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                {errors.price?.type === "required" &&
                            "Product Price is required"}
                                </span>
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                        <label className="label">
                                <span className="label-text font-semibold">
                                    Product Image
                                </span>
                            </label>
                            <input
                                {...register("image", { required: true})}
                                type="file"
                                placeholder="Product image"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                {errors.image?.type === "required" &&
                            "image is required"}
                                </span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div class="form-control w-full max-w-xs">
                        <label className="label">
                                <span className="label-text font-semibold">
                                    Minimum Purchase Number
                                </span>
                            </label>
                            <input
                                {...register("minQ", { required: true})}
                                type="text"
                                placeholder="Minimum Quantity"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                {errors.minQ?.type === "required" &&
                            "Minimum Quantity is required"}
                                </span>
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                        <label className="label">
                                <span className="label-text font-semibold">
                                    Supply Number
                                </span>
                            </label>
                            <input
                                {...register("stock", { required: true})}
                                type="text"
                                placeholder="Supply Product"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                {errors.stock?.type === "required" &&
                            "Product Supply is required"}
                                </span>
                            </label>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="m-5 lg:mx-32 avatar">
                    <input
                        type="submit"
                        className="btn btn-primary text-white"
                        value="Update Profile"
                    />
                </div>
            </form>
        </>
    );
};

export default AddProduct;
