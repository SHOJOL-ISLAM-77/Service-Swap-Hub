/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PublicReview = () => {
  const [reviews, setReviews] = useState([]);

  const url = `http://localhost:7000/api/v1/reviews`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error while making GET request:", error);
      });
  }, [url]);
  return (
    <div className="container mx-auto my-24">
      <div className="flex justify-evenly items-center"> 
        <div>
          <h2 className="font-bold text-3xl">
            Don't just take our word for it
          </h2>
          <h3 className="font-bold my-4">
            See how Taskers are saving the day for people like you.
          </h3>
        </div>
        <div>
            <Link className="text-xl px-5 py-2 bg-blue-600 text-white rounded-sm">Add your review</Link>
        </div>
      </div>
      <div className="my-26 grid lg:grid-cols-2 lg:space-y-6">
        {reviews.map((review) => (
          <div key={review._id} className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={review?.image}
              alt=""
            />
            <div className="font-medium dark:text-white">
              <div className="my-2">{review?.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {review?.message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicReview;
