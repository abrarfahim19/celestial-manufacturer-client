import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";


const PostReview = ({ refetch }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    data.name = user?.displayName;
    data.email = user?.email;
    fetch("https://celestial123.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((d) => {
          console.log(d)
          if (d.insertedId) {
            toast.success("Thanks for review");
            refetch();
            reset();
            reset();
          }
      });
  };

  return (
      <div className="m-32">
    <div className="flex">
      <div className="avatar placeholder col-span-1">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
        <span class="text-3xl">{user?.displayName.slice(0,2) || "User"}</span>
        </div>
      </div>

      <div className="w-full ml-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            
            placeholder="Write A Review..."
            className={
              errors.comment
                ? "textarea  w-full textarea-error m-2 resize-x"
                : "textarea  w-full textarea-bordered m-2 resize-x"
            }
            {...register("comment", { required: true })}
          ></textarea>
          <div className="flex justify-between">
            <div className="rating">
              <input
                
                type="radio"
                className="mask mask-star"
                value="1"
                {...register("rating", { required: true })}
              />
              <input
                
                type="radio"
                className="mask mask-star"
                value="2"
                {...register("rating", { required: true })}
              />
              <input
                
                type="radio"
                className="mask mask-star"
                value="3"
                {...register("rating", { required: true })}
              />
              <input
                
                type="radio"
                className="mask mask-star"
                value="4"
                {...register("rating", { required: true })}
              />
              <input
                
                type="radio"
                className="mask mask-star"
                value="5"
                {...register("rating", { required: true })}
              />

              {errors.rating && (
                <span className=" text-blue-500">( rating is required! )</span>
              )}
            </div>
            <div>
              <button
                
                type="submit"
                className="btn btn-sm"
              >
                post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PostReview;