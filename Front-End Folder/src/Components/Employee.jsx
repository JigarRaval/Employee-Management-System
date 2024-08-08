import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete_employee/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <div className="w-full h-full flex flex-col home">
      <div className="flex  items- justify-center mx-auto w-full ">
        <h3 className="border-b-2 text-3xl md:text-4xl border-gray-600  py-2 my-4 mx-auto text-yellow-600">
          Employee List
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto  gap-8 my-5">
        {employee.map((e) => (
          <div
            key={e.id}
            className="flex flex-col w-3/4 px-3  border-2 border-gray-500 mx-auto rounded-lg  hover:scale-105 hover:shadow-black hover:shadow-xl duration-500"
          >
            <img
              src={`http://localhost:3000/Images/` + e.image}
              className="p-2 rounded-xl mb-2 "
            />
            <div className="py-3 mb-1 w-full ">
              <p>Name : {e.name}</p>
              <p>Email : {e.email}</p>
              <p>Address : {e.address}</p>
              <p>Salary : {e.salary}</p>
            </div>
            <div className="h-full w-full flex items-end pb-2  justify-evenly">
              <Link
                to={`/dashboard/edit_employee/` + e.id}
                className="btn btn-info btn-sm  mx-3 w-1/2 hover:border-black hover:scale-105 duration-300 "
              >
                Edit
              </Link>
              <button
                className="btn btn-warning btn-sm mx-3 w-1/2  hover:border-black hover:scale-105 duration-300"
                onClick={() => handleDelete(e.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto hover:scale-105 duration-200">
        <Link
          to="/dashboard/add_employee"
          className="btn btn-success hover:shadow-lg hover:shadow-black duration-300"
        >
          Add Employee
        </Link>
      </div>
    </div>
  );
};

export default Employee;
