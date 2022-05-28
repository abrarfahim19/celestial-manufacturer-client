import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    
    const onSubmit = async data => {
        console.log(process.env.REACT_APP_imageApiKey);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product = {
                    name: data.name,
                    price: data.price,
                    minQ: data.minQ,
                    stock: data.stock,
                    img: img
                }
                // send to your database 
                fetch('https://celestial123.herokuapp.com/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product HAs been Added')
                        reset();
                    }
                    else{
                        toast.error('Product Add failed...');
                    };
                })
            }       
        })
    };


    return (
        <>
            <div>
                <h1 className="text-center text-primary text-2xl font-bold mt-5 mb-5">Add a Product</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-5 lg:mx-32 grid grid-cols-2">
                    <div>
                        <div className="form-control w-full max-w-xs">
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
                        <div className="form-control w-full max-w-xs">
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
                        <div className="form-control w-full max-w-xs">
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
                        <div className="form-control w-full max-w-xs">
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
                        <div className="form-control w-full max-w-xs">
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
                        value="Add Product"
                    />
                </div>
            </form>
        </>
    );
};

export default AddProduct;
