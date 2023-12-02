"use client";

import { useEffect, useState } from "react";

// icons
import { CgMenuGridO } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  const [pageTitle, setPageTitle] = useState("ReKha");

  useEffect(() => {
    const title = document.title;
    const firstWord = title.split(" ")[0];
    setPageTitle(firstWord);
  }, []);

  return (
    <header className="flex justify-between p-3 sticky top-0 z-50 bg-blur bg-opacity-50">
      <CgMenuGridO className="text-2xl" />

      {/* name of the page opened */}
      <h1 className="capitalize text-xl font-bold">{pageTitle}</h1>

      <IoNotifications className="text-2xl" />
    </header>
  );
};

export default Header;
