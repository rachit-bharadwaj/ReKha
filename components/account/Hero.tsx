"use client";

import { useEffect, useState } from "react";
import { getUserDataFromCookie } from "@/lib/actions/user.action";

// icons
import { TiUser } from "react-icons/ti";
import { HiPencil } from "react-icons/hi";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  // user details state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getUserDetails = async () => {
    const data = await getUserDataFromCookie();
    setName(data.name);
    setEmail(data.email);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center my-5 gap-3">
      <div
        className={`w-44 h-44 p-3 rounded-full flex justify-center items-center cursor-pointer ${
          isHovered ? ` bg-primary/10` : `bg-white-light `
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TiUser
          className={`text-primary text-9xl absolute transition-all duration-500 ${
            isHovered && `opacity-30 text-primary/50`
          }`}
        />
        {isHovered && (
          <HiPencil className="text-primary text-7xl flex z-40 top-0 relative rounded-full p-2" />
        )}
      </div>

      {/* user details */}
      <div className="text-center">
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </section>
  );
};

export default Hero;
