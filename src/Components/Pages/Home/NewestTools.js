import React, { useEffect, useState } from "react";

const NewestTools = () => {
    const [products, setProducts] = useState([]);
    const sorted = products.reverse().slice(0, 4);
    useEffect(() => {
        fetch("https://celestial123.herokuapp.com/product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="flex mx-32 flex-col justify-center my-5">
            <h2 className="text-center text-primary mb-5 font-bold text-3xl">
                Newest Products
            </h2>
            <div className="card w-1/2 mx-auto bg-slate-100 p-7 shadow mb-5">
                <div className="flex justify-center mx-auto">
                    <div className="avatar col-span-1">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                            <img src={sorted[0]?.img} alt="" />
                        </div>
                    </div>
                    <div className="w-full ml-4">
                        <h1 className="text-primary text-2xl font-semibold">Get Out Newest Product {sorted[0]?.name}</h1>
                        <h1 className="text-3xl">Left only <span className="text-indigo-500"> {sorted[0]?.stock} </span>pieces</h1>
                        <h1 className="text-xl">Grab your deal Now! For Just <span className="text-green-600"> {sorted[0]?.price}$</span></h1>
                    </div>
                </div>
            </div>
            <div className="card w-4/6 mx-auto bg-slate-100 p-7 shadow mb-5">
                <div className="flex justify-center mx-auto">
                    <div className="avatar col-span-1">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                            <img src={sorted[1]?.img} alt="" />
                        </div>
                    </div>
                    <div className="w-full ml-4">
                        <h1 className="text-primary text-2xl font-semibold">Get Out Newest Product {sorted[1]?.name}</h1>
                        <h1 className="text-3xl">Left only <span className="text-indigo-500"> {sorted[1]?.stock} </span>pieces</h1>
                        <h1 className="text-xl">Grab your deal Now! For Just <span className="text-green-600"> {sorted[1]?.price}$</span></h1>
                    </div>
                </div>
            </div>
            <div className="card w-5/6 mx-auto bg-slate-100 p-7 shadow mb-5">
                <div className="flex justify-center mx-auto">
                    <div className="avatar col-span-1">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                            <img src={sorted[2]?.img} alt="" />
                        </div>
                    </div>
                    <div className="w-full ml-4">
                        <h1 className="text-primary text-2xl font-semibold">Get Out Newest Product {sorted[2]?.name}</h1>
                        <h1 className="text-3xl">Left only <span className="text-indigo-500"> {sorted[2]?.stock} </span>pieces</h1>
                        <h1 className="text-xl">Grab your deal Now! For Just <span className="text-green-600"> {sorted[2]?.price}$</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewestTools;
