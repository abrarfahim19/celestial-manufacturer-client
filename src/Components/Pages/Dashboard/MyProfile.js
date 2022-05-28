import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Shareable/Loading";

const MyProfile = () => {
    const [edit,setEdit] = useState(false);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {data: useDetail,isLoading,refetch} = useQuery(["details", email], () =>
        fetch(`https://celestial123.herokuapp.com/user/${email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }

    const onSubmit = async (data) => {
        console.log(data);
        const update = {
            userName:data.userName,
            company:data.company,
            jobRole:data.jobRole,
            location:data.location,
            description:data.description
        };
        fetch(`https://celestial123.herokuapp.com/user/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(update),
        })
        .then((res) => res.json())
        .then(result => {
            console.log(result)
            if(result.success ==="true"){
                toast('Update Successful')
            }
        })
    }

    return (
        <>
            <div class="m-5 lg:mx-32 avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span class="text-3xl">{useDetail.userName ? useDetail.userName[0] : "User"}</span>
                </div>
                <button onClick={()=> setEdit(!edit)} class="btn btn-sm btn-primary text-white gap-2">
                    Edit
                    <i class="fa-solid fa-user-pen"></i>
                </button>
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
                                {...register("userName")}
                                type="text"
                                disabled={!edit}
                                defaultValue={`${useDetail.userName}`}
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
                                {...register("description")}
                                type="text"
                                disabled={!edit}
                                defaultValue={`${useDetail?.description}`}
                                placeholder="Bio"
                                class="input input-primary font-semibold text-lg input-bordered w-full max-w-xs"
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
                                {...register("company")}
                                type="text"
                                disabled={!edit}
                                defaultValue={`${useDetail?.company}`}
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
                                {...register("jobRole")}
                                type="text"
                                disabled={!edit}
                                defaultValue={`${useDetail?.jobRole}`}
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
                               {...register("location")}
                               type="text"
                               disabled={!edit}
                               defaultValue={`${useDetail?.location}`}
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
