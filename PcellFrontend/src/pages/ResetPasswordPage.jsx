import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import React, { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { IoMdDoneAll } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { baseUrl } from "../constants.js";


function ResetPasswordPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams();

  const { id } = useParams();
  const token = searchParams.get("token")

//   console.log(id,token);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(1);
      const res = await axios.post(
        `${baseUrl}/auth/reset/${id}/${token}`,
        { confirmPassword, password }
      );
      setLoading(0);

      const data = res.data;
      if (data?.success === 0) {
        setErrorMessage(data?.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 6000);
      } else {
        setSuccessMessage(data?.message);
        setTimeout(() => {
          setSuccessMessage("");
        }, 6000);
      }
    } catch (error) {
        console.log(error);
      setErrorMessage("Internal Server Error");
      setTimeout(() => {
        setErrorMessage("");
      }, 6000);
    }
  }

  return (
    <>
      {successMessage !== "" && (
        <p className=" sticky bg-green-100 w-full p-2 flex flex-row text-black dark:text-black">
          <IoMdDoneAll size={20} color="green" />
          {successMessage}
        </p>
      )}
      {errorMessage !== "" && (
        <p className="mt-2 p-2 text-sm text-red-600">
          <span className="font-medium flex flex-row">
            <RxCross2 size={20} color="red" />
          </span>{" "}
          {errorMessage}
        </p>
      )}

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            P-Cell Web
          </div>
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    // console.log(password);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    // console.log(confirmPassword);
                  }}
                />
              </div>

              <Link className="text-blue-600 text-sm" to={"/"} ><u>Login</u></Link>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleSubmit}
              >
                <div className="flex flex-row justify-center">
                  <Spinner text={"Reset Password"} loading={loading} />
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPasswordPage;
