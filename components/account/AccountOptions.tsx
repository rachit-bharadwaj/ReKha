"use client";

import { AccountOption } from "@/props";
import { logout } from "@/lib/actions/auth.action";

// icons
import { TiUser } from "react-icons/ti";
import { HiLockClosed } from "react-icons/hi";
import { TbLogout, TbSettingsFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";

const AccountOptions = () => {
  return (
    <section className="p-5 mb-20 flex flex-col gap-7">
      <AccountOption
        link="/account/info"
        Icon={TiUser}
        bgColor="bg-primary"
        title="Account Information"
      />
      <AccountOption
        link="/privacy"
        Icon={HiLockClosed}
        bgColor="bg-[#365e7d]"
        title="Privacy Policy"
      />
      <AccountOption
        link="/account/settings"
        Icon={TbSettingsFilled}
        bgColor="bg-[#1e7975]"
        title="Settings"
      />

      {/* log out button */}
      <button
        onClick={() => logout()}
        className="flex items-center justify-between w-full max-w-xs mx-auto"
      >
        <div className="flex items-center gap-2">
          <div className="p-2 w-fit rounded-lg bg-red-500">
            <TbLogout className="text-2xl text-white-dark" />
          </div>

          <p className="text-gray-700">Logout</p>
        </div>

        <IoIosArrowForward className="text-gray-400 text-xl" />
      </button>
    </section>
  );
};

export default AccountOptions;
