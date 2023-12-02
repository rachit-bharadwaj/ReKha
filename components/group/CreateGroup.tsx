"use client";

import React, { useState } from "react";
import { searchUser } from "@/lib/actions/user.action";
import toast, { Toaster } from "react-hot-toast";

// icons
import { BiSearchAlt } from "react-icons/bi";
import { ImCross } from "react-icons/im";

// types
import { User } from "@/types";
import { useRouter } from "next/navigation";

const CreateGroup = () => {
  const router = useRouter();

  // form fields
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState<User[]>([]);

  // group-focus state
  const [active, setActive] = useState(false);

  // loading state
  const [loading, setLoading] = useState(false);

  // add members state
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    // search users
    const users = await searchUser({ query: searchQuery });
    if (searchQuery.trim() === "") {
      setShowPopup(false);
    } else if (users.length > 0) {
      setSearchResults(users);
      setShowPopup(true);
    }
  };

  // handle adding a user to the members list
  const handleAddMember = (user: User) => {
    setMembers((prevMembers) => [...prevMembers, user]);
    setShowPopup(false);
  };

  // handle removing a user from the members
  const handleRemoveMember = (user: User) => {
    setMembers((prevMembers) =>
      prevMembers.filter((member) => member._id !== user._id)
    );
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "groupName") setGroupName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // create group data
    const groupData = {
      groupName: groupName,
      members: members.map((member) => member._id),
    };

    // create group
    const res = await fetch("/api/group", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    });

    if (res.status === 200) {
      toast.success("Group created successfully");
      router.push("/groups");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-xs mx-auto mb-20"
    >
      <input
        type="text"
        placeholder="Group Name"
        className="p-3 rounded bg-white-light focus:outline-none focus:shadow focus:shadow-secondary"
        name="groupName"
        onChange={handleDataChange}
      />

      {/* ---------- search users ----- */}
      <div
        className={`flex items-center gap-2 bg-white-light p-3 rounded ${
          active && `shadow shadow-secondary`
        }`}
      >
        <BiSearchAlt className="text-2xl text-gray-400" />
        <input
          type="text"
          placeholder="Search people to add"
          className="focus:outline-none bg-transparent"
          onFocus={() => {
            setActive(true);
          }}
          onBlur={() => {
            setActive(false);
          }}
          onChange={handleSearch}
        />
      </div>

      {/* ----------- search results popup ----------- */}
      {showPopup && (
        <div className="bg-white-light rounded p-3">
          <button
            className="text-right w-full text-2xl"
            onClick={() => setShowPopup(false)}
          >
            X
          </button>
          {searchResults.map((user, index) => (
            <div key={index} className="flex items-center pb-5">
              <div
                className="shadow p-2 rounded-lg flex-1 cursor-pointer"
                onClick={() => handleAddMember(user)}
              >
                <p className="text-gray-600">{user.name}</p>
                <p className="text-gray-400 text-sm">{`@${user.userName}`}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---------- members ----- */}
      <div className="p-3 rounded bg-white-light">
        <p className="text-secondary text-lg font-bold">Members</p>
        <p className="text-gray-400 select-none">
          {members.length === 0 && `No one added yet`}
          {members.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded p-2 mb-2"
            >
              {member.name}
              <ImCross
                className="cursor-pointer hover:text-red-500"
                onClick={() => handleRemoveMember(member)}
              />
            </div>
          ))}
        </p>
      </div>

      <button
        type="submit"
        className="bg-secondary rounded p-3 text-white-light"
      >
        Create
      </button>

      <Toaster />
    </form>
  );
};

export default CreateGroup;
