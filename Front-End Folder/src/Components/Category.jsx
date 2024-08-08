import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-5 w-full  h-screen home">
      <div className="d-flex justify-content-center">
        <h3 className="text-3xl border-b-2 border-gray-600 md:text-4xl text-yellow-600 py-2 my-4">
          Cetegory List
        </h3>
      </div>
      <div className="mt-3 flex flex-col justify-center mx-auto md:items-start items-center py-4">
        <div className="mb-8 border-b-2 text-2xl w-fit md:text-3xl">
          <p>Categories</p>
        </div>
        {category.map((c) => (
          <ol key={c.category_id} className="py-1 ">
            <li className="text-lg first-letter:capitalize">{c.name}</li>
          </ol>
        ))}
      </div>
      <div className="flex mx-auto items-center justify-center my-2 md:justify-start ">
        <Link
          to="/dashboard/add_category"
          className="btn  btn-success hover:scale-105  hover:shadow hover:shadow-black  duration-300"
        >
          Add Cetegory
        </Link>
      </div>
    </div>
  );
};

export default Category;
