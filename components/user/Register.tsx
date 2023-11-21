"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const router = useRouter();

  // loading state
  const [loading, setloading] = useState(false);

  // show or hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // create states for input fields
  const [name, setName] = useState({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // handle data on change
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // set data
    switch (name) {
      case "fullName":
        setName(value);
        break;

      case "userName":
        setUserName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirmPassword":
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setloading(true);

      // check if all the fields are filled
      if (!name || !userName || !email || !password || !confirmPassword) {
        return toast.error("Please fill all the fields");
      }

      //  validate username
      const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
      if (!usernameRegex.test(userName))
        return toast.error(
          "Username can contain letters, numbers and underscores and should be 3-16 characters long"
        );

      // validate email
      const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!emailRegex.test(email))
        return toast.error("Please enter a valid email address");

      // validate password
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
      if (!passwordRegex.test(password))
        return toast.error(
          "Password should contain atleast one uppercase letter, one lowercase letter, one number, one special character and should be 8 characters long"
        );

      // check if password and confirm password are same
      if (password !== confirmPassword)
        return toast.error("Passwords do not match");

      // create user data
      const userData = {
        name,
        userName,
        email,
        password,
      };

      // register user
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (data.status === 400 || data.status === 500) toast.error(data.message);
      else if (data.status === 201) {
        toast.success(data.message);
        window.location.reload();
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setloading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 flex flex-col gap-5 rounded shadow-primary shadow-lg"
    >
      <input
        type="text"
        placeholder="Full Name"
        className="flex-1 focus:outline-none border p-2 rounded"
        name="fullName"
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="@username"
        className="flex-1 focus:outline-none border p-2 rounded"
        name="userName"
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="email@example.com"
        className="flex-1 focus:outline-none border p-2 rounded"
        name="email"
        onChange={handleChange}
      />

      <div className="flex-1 flex border p-2 rounded items-center gap-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="flex-1 focus:outline-none"
          name="password"
          onChange={handleChange}
        />
        {!showPassword ? (
          <AiOutlineEye
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={toggleShowPassword}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={toggleShowPassword}
          />
        )}
      </div>

      <div className="flex-1 flex border p-2 rounded items-center gap-3">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="flex-1 focus:outline-none"
          name="confirmPassword"
          onChange={handleChange}
        />
        {!showConfirmPassword ? (
          <AiOutlineEye
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={toggleShowConfirmPassword}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={toggleShowConfirmPassword}
          />
        )}
      </div>

      {loading ? (
        <div className="flex justify-center">
          <Image
            src="/loading.svg"
            alt="loading"
            height={500}
            width={500}
            className="w-fit h-16"
          />
        </div>
      ) : (
        <button type="submit" className="bg-primary text-white py-2 rounded">
          Register
        </button>
      )}
      <Toaster />
    </form>
  );
};

export default Register;
