import React from "react";

const Review = ({review}) => {
    return (
        <div className="mx-32 my-3">
            <div className="card bg-slate-100 p-7 shadow">
                <div className="flex justify-center">
                    <div className="avatar placeholder col-span-1">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                            <span className="text-3xl">
                                {review?.name.slice(0,2) || "User"}
                            </span>
                        </div>
                    </div>
                    <div className="w-full ml-4">
                        <h1 className="text-primary text-2xl font-semibold">{review.comment}</h1>
                        <h1 className="text-3xl">Rating: <span className="text-indigo-500"> {review.rating}</span>/5</h1>
                        <h1 className="text-xl">Email: <span className="text-green-600"> {review.email}</span></h1>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Review;
