import { CreateGroup } from "@/components/group";

const page = () => {
  return (
    <div className="p-3">
      <div className="mt-16 mb-10">
        <h1 className="text-secondary text-5xl font-extrabold">Create Group</h1>
        <p className="text-gray-600">
          Create a group to manage expenses together
        </p>
      </div>

      {/* ---------------create group form---------- */}
      <CreateGroup />
    </div>
  );
};

export default page;
