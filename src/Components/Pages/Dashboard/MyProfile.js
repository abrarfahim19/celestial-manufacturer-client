import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MyProfile = () => {
    // const [edit, setEdit] = useState(false);
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
                            <label class="label">
                                <span class="label-text font-semibold">
                                    Name
                                </span>
                            </label>
                            <input
                                {...register("name", { required: true})}
                                type="text"
                                placeholder="Your Name"
                                class="input input-primary font-semibold text-lg input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-semibold">
                                    Description
                                </span>
                            </label>
                            <input
                                {...register("description", { required: true})}
                                type="text"
                                placeholder="Bio"
                                class="input input-primary h-32 font-semibold text-lg input-bordered w-full max-w-xs"
                            />
                        </div>
                    </div>
                    <div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-semibold">
                                    Company
                                </span>
                            </label>
                            <input
                                {...register("company", { required: true})}
                                type="text"
                                placeholder="Your Company Name"
                                class="input input-primary font-semibold text-lg input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-semibold">
                                    Job Role
                                </span>
                            </label>
                            <input
                                {...register("jobRole", { required: true})}
                                type="text"
                                placeholder="Your Role"
                                class="input input-primary font-semibold text-lg input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-semibold">
                                    Location
                                </span>
                            </label>
                            <input
                               {...register("location", { required: true})}
                               type="text"
                               placeholder="Your Location"
                                class="input input-primary font-semibold text-lg input-bordered w-full max-w-xs"
                            />
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

export default MyProfile;
