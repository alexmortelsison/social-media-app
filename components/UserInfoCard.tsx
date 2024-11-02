import {
  Calendar1Icon,
  GraduationCapIcon,
  Link2Icon,
  MapIcon,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">User Information</span>
        <Link href={"/"} className="text-blue-500 text-sm">
          see all
        </Link>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Alex Sison</span>
          <span className="text-sm">@alexsison</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          laudantium facilis veritatis
        </p>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>
            Living in&nbsp;<b>Tokyo</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCapIcon size={16} />
          <span>
            Went to&nbsp;<b>San Beda College</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>
            Works at&nbsp;<b>AppDev Manila</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Link2Icon size={16} />
            <Link
              href={"https://alexsison.vercel.app"}
              className="text-blue-500"
            >
              alexsison.vercel.app
            </Link>
          </div>
          <div className="hidden 2xl:flex gap-1 items-center">
            <Calendar1Icon size={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-sm cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
