import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            {
                products.length
            }
            {
                products.map(product =><ProductCard product={product} key={product._id}></ProductCard>)
            }   
        </div>
    );
};

export default Products;