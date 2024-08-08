import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setemployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, []);

  const AdminRecords = () => {
    axios.get("http://localhost:3000/auth/admin_records").then((result) => {
      if (result.data.Status) {
        setAdmins(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    });
  };
  const adminCount = () => {
    axios.get("http://localhost:3000/auth/admin_count").then((result) => {
      if (result.data.Status) {
        setAdminTotal(result.data.Result[0].admin);
      }
    });
  };
  const employeeCount = () => {
    axios.get("http://localhost:3000/auth/employee_count").then((result) => {
      if (result.data.Status) {
        setemployeeTotal(result.data.Result[0].employee);
      }
    });
  };
  const salaryCount = () => {
    axios.get("http://localhost:3000/auth/salary_count").then((result) => {
      if (result.data.Status) {
        setSalaryTotal(result.data.Result[0].salaryOFEmp);
      } else {
        alert(result.data.Error);
      }
    });
  };
  return (
    <div className="w-full h-screen flex  md:flex-row flex-col-reverse justify-around mx-auto home">
      <div className="max-w-screen-lg flex flex-col  items-center w-full mx-auto md:justify-between  md:h-1/2 ">
        <h3 className="text-3xl md:text-4xl border-b-2 border-black  py-2 my-4 text-yellow-600  ">
          List of Admins
        </h3>
        <table className="flex flex-col justify-between  mx-auto my-2 w-full ">
          <thead>
            <tr className=" border-b-2 border-white border-opacity-10 py-2 flex text-xl justify-around items-start mx-3 my-2 px-12 ">
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr
                key={a.id}
                className="flex justify-around items-start mx-3 my-2 px-4  "
              >
                <td>{a.email}</td>
                <td className=" flex   ">
                  <button className="btn btn-info btn-sm  mx-2 hover:scale-110  duration-500">
                    Edit
                  </button>
                  <button className="btn btn-warning btn-sm  mx-2 hover:scale-110 duration-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex  md:flex-col md:border-l-2 border-gray-4004 md:w-1/3   mx-auto md:mx-4 mb-[-400px] md:mb-0 md:mt-6 md:pt-20 mt-[-200px]">
        <div className=" flex flex-col border-2 p-2 mx-4 my-8 rounded-lg">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className="flex flex-col border-2 p-2 mx-4 my-8 rounded-lg">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className="flex flex-col border-2 p-2 mx-4 my-8  rounded-lg">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>${salaryTotal}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
