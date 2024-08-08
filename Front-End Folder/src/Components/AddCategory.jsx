import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/add_category", { category })
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/category");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center my-auto h-screen w-full home ">
      <div className="border-2 w-4/5 rounded-3xl md:w-1/3 p-2 py-4 flex flex-col items-center loginForm">
        <h2 className="py-2 mb-2 text-2xl md:3xl text-yellow-600 border-b-2 ">
          Add Category
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-around py-4 p-2 my-3">
            <label htmlFor="category" className="flex py-2 w-full ">
              <strong className="text-lg">Category:</strong>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter Category"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control rounded-2xl"
            />
          </div>
          <div className="flex items-center justify-center rounded-lg">
            <button className="btn btn-success  hover:shadow-black hover:shadow-lg duration-300 ">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
