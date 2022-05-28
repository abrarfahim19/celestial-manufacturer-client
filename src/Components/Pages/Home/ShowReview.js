import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import PostReview from '../Dashboard/AddReview';
import Loading from '../Shareable/Loading';
import Review from './Review';

const ShowReview = () => {
    const [user] = useAuthState(auth);
    const {data: reviews,isLoading,refetch,} = useQuery("reviews", () =>
        fetch("https://celestial123.herokuapp.com/review", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            {
                reviews.slice(0,3).map(review => <Review key={review._id} review={review}></Review>)
            }
            {
                user && <PostReview refetch={refetch}></PostReview>
            }
        </div>
    );
};

export default ShowReview;