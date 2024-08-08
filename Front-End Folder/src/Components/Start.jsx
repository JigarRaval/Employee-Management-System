import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
useEffect;

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/employee_detail/" + result.data.id);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex w-full h-screen justify-center items-center mx-auto loginPage">
      <div className="flex flex-col p-4 w-80 md:w-96  loginForm">
        <h2 className="text-center border-b-2 border-white p-2 text-2xl md:text-3xl">
          Login As
        </h2>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <button
            type="button"
            className="btn btn-primary hover:scale-105 duration-700"
            onClick={() => {
              navigate("/employee_login");
            }}
          >
            Employee
          </button>
          <button
            type="button"
            className="btn btn-success hover:scale-105 duration-700"
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
