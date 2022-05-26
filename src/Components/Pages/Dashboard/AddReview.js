import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
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
    const name = "";
    return (
        <div>
            <h2>Add Review</h2>
            <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span class="text-3xl">{name ? name[0] : "User"}</span>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <div class="rating">
                        <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                        />
                    </div>
                    <label class="label">
                        <span class="label-text font-semibold">Review</span>
                    </label>
                    <input
                        {...register("review", { required: true })}
                        type="text"
                        rows="4"
                        cols="50"
                        placeholder="Your Review"
                        class="input input-primary font-semibold text-lg input-bordered w-full  max-w-xs"
                    />
                </div>

                <div className="m-5 lg:mx-32 avatar">
                    <input
                        type="submit"
                        className="btn btn-primary text-white"
                        value="Add Reviw"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddReview;
