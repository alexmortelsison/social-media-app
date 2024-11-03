import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import {
  AlbumIcon,
  BookOpenCheckIcon,
  CalendarSearchIcon,
  ListChecksIcon,
  NewspaperIcon,
  NotebookPenIcon,
  PianoIcon,
  Settings,
  StoreIcon,
  Video,
} from "lucide-react";
import Ad from "./Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <NotebookPenIcon />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <PianoIcon />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <StoreIcon />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <CalendarSearchIcon />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <AlbumIcon />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Video />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <NewspaperIcon />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <BookOpenCheckIcon />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <ListChecksIcon />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Settings />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size={"sm"} />
    </div>
  );
};

export default LeftMenu;
