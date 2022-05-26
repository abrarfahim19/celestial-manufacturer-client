import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shareable/Loading';

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
    const {data: details,isLoading,refetch,} = useQuery(["details",productId], () =>
    fetch(`http://localhost:5000/product/${productId}`).then((res) => res.json())
    );
    // console.log(details)
    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div>
            <h1>{details.name}</h1>
        </div>
    );
};

export default ProductPage;