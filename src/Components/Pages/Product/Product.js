import React, { useEffect, useState } from 'react';
import ProductCard from '../Home/ProductCard';

const Purchase = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://celestial123.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h2 className='text-center font-semibold text-2xl'>Number Of Products: <span className='text-primary'>{products.length}</span></h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                    {
                        products.map(product =><ProductCard product={product} key={product._id}></ProductCard>)
                    }
            </div>

        </div>
    );
};

export default Purchase;