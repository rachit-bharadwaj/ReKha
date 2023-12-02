import { AccountProps } from "@/types";
import Link from "next/link";

// icons
import { IoIosArrowForward } from "react-icons/io";

const AccountOption = ({ link, Icon, title, bgColor }: AccountProps) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-between w-full max-w-xs mx-auto"
    >
      <div className="flex items-center gap-2">
        <div className={`p-2 w-fit rounded-lg ${bgColor}`}>
          <Icon className="text-2xl text-white-dark" />
        </div>

        <p className="text-gray-700">{title}</p>
      </div>

      <IoIosArrowForward className="text-gray-400 text-xl" />
    </Link>
  );
};

export default AccountOption;
