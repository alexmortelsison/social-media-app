import { AiFillStar } from "react-icons/ai";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={
            "https://images.pexels.com/photos/20603895/pexels-photo-20603895.jpeg"
          }
          fill
          alt=""
          className="rounded-md object-cover"
        />
        <Image
          src={"/alex.jpg"}
          width={48}
          height={48}
          alt=""
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10 object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 items-center justify-between mt-4">
        <span className="font-semibold text-xl tracking-tighter">
          Alex Sison
        </span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <AiFillStar className="text-yellow-500 w-3" />
            <AiFillStar className="text-yellow-500 w-3" />
            <AiFillStar className="text-yellow-500 w-3" />
          </div>
          <span className="text-gray-500">1269 Followers</span>
        </div>
        <button className="bg-blue-400 text-white rounded-md px-2 py-1">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
