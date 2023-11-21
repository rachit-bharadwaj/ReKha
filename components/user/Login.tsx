"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  // loading state
  const [loading, setloading] = useState(false);

  // show or hide password
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  // create states for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle data on change
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // set data
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
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
      if (!email || !password) return toast.error("Please fill all the fields");

      // validate email
      const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!emailRegex.test(email))
        return toast.error("Please enter a valid email address");

      // create user data
      const userData = {
        email,
        password,
      };

      // register user
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      console.log(data);

      if (data.status === 400 || data.status === 500) toast.error(data.message);
      else if (data.status === 200) {
        toast.success(data.message);
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setEmail("");
      setPassword("");
      setloading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 flex flex-col gap-5 rounded shadow-primary shadow-lg"
    >
      <input
        type="email"
        placeholder="email@example.com"
        className="flex-1 focus:outline-none border p-2 rounded"
        onChange={handleChange}
        name="email"
      />

      <div className="flex-1 flex border p-2 rounded items-center gap-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="flex-1 focus:outline-none"
          onChange={handleChange}
          name="password"
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

      <Link href="/forgot-password" className="w-fit">
        <p className="text-primary hover:underline">Forgot Password?</p>
      </Link>

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
          Login
        </button>
      )}
      <Toaster />
    </form>
  );
};

export default Login;
