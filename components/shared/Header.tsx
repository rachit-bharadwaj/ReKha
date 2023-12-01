"use client";

// icons
import { CgMenuGridO } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  const pathname = window.location.pathname;
  const nextSlashIndex = pathname.indexOf("/", 1); // Find the index of the next slash after the first character
  const pageTitle =
    nextSlashIndex !== -1
      ? pathname.substring(1, nextSlashIndex)
      : pathname.substring(1); // Get the substring before the next slash or the whole string if there is no next slash

  return (
    <header className="flex justify-between p-3">
      <CgMenuGridO className="text-2xl" />

      {/* name of the page opened */}
      <h1 className="capitalize text-lg font-bold">{pageTitle || `Home`}</h1>

      <IoNotifications className="text-2xl" />
    </header>
  );
};

export default Header;
