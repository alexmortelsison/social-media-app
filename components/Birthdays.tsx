import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Check, GiftIcon, X } from "lucide-react";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">Birthdays</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/431919188_10161285440076101_6937954144975559648_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6gTACo-rOmoQ7kNvgFtsBLt&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=A1KJlwlg2O6Ovm747ZpxUGr&oh=00_AYBIhaz3-gHsatwaERa_R0neI_hNeVUPsYYI4qPGGQR4eQ&oe=672BA602"
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-semibold">Winrich Go</span>
        </div>

        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>

      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <GiftIcon size={24} className="text-primary" />
        <Link href={"/"} className="flex flex-col gap-1 text-sm">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">See other 16 upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
