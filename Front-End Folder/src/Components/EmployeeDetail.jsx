import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/detail/" + id)
      .then((result) => {
        setEmployee(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/employee/logout")
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full h-screen flex flex-col home">
      <div className="p-4 border-b-2 border-gray-500 d-flex justify-content-center shadow">
        <h4 className="text-2xl md:text-4xl text-yellow-600">
          Emoployee Management System
        </h4>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center h-full p-4  ">
        <img
          src={`http://localhost:3000/Images/` + employee.image}
          className="w-1/2  md:w-1/6  h-1/3 rounded-3xl   my-8 p-2 "
        />
        <div className="h-1/4  ml-10 flex flex-col justify-center md:py-0 py-4">
          <div className=" flex flex-col justify-center mx-20 py-2 text-lg">
            <h3>Name: {employee.name}</h3>
            <h3 className="py-3 ">Email: {employee.email}</h3>
            <h3>Salary: ${employee.salary}</h3>
          </div>
          <div className="flex justify-between py-4 mx-auto ">
            <button className="btn btn-primary  hover:scale-105 duration-500 mr-28  hover:shadow-lg hover:shadow-blue-400">
              Edit
            </button>
            <button
              className="btn btn-danger hover:scale-105 duration-500 hover:shadow-lg hover:shadow-red-400"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
