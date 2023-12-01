import Link from "next/link";

// icons
import { TbSmartHome } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";
import { RiUserSmileFill } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { VscAdd } from "react-icons/vsc";
import { IoIosWallet } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

// shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 z-50 flex w-full p-3 bg-white-light">
      <ul className="text-gray-400 text-3xl flex justify-evenly items-center w-full">
        <li>
          <Link href="/">
            <TbSmartHome />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaChartLine />
          </Link>
        </li>

        <li>
          <Link href="/">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <VscAdd className="text-5xl bg-primary text-white-light p-3 rounded-full" />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    href="/expense/new"
                    className="flex gap-2 text-gray-600"
                  >
                    <TiUser className="text-lg" />
                    Personal Expense
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="/expense/group"
                    className="flex gap-2 text-gray-600"
                  >
                    <HiMiniUserGroup className="text-lg" /> Group Expense
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/groups/new" className="flex gap-2 text-gray-600">
                    <AiOutlineUsergroupAdd className="text-lg" />
                    New Group
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Link>
        </li>

        <li>
          <Link href="/">
            <IoIosWallet />
          </Link>
        </li>
        <li>
          <Link href="/">
            <RiUserSmileFill />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
