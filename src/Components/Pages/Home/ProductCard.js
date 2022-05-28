import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const {_id, name, minQ, price, stock, img } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
        navigate(`/product/${id}`);
        console.log(id);
    };
    return (
        <div className="justify-self-center">

        <div class="card h-full w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img
                    src={img}
                    alt="img of product"
                    class="rounded-xl"
                />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name: {name}</h2>
                <p className="text-md">Price:{price}/pc</p>
                <p className="text-md">MinQ: {minQ}</p>
                <div class="card-actions">
                    <button onClick={() => navigateToProductDetail(_id)} class="btn btn-primary text-white">Purchase</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;
