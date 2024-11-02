import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Check, CheckCheck, X } from "lucide-react";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">Friend Requests</span>
        <Link href={"/"} className="text-blue-500 text-sm">
          see all
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://images.pexels.com/photos/5506109/pexels-photo-5506109.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-semibold">Kuroki Shoma</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Check className="text-green-500 cursor-pointer w-4" />
          <X className="text-red-500 cursor-pointer w-4" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-1/362259673_236028759383280_347970716282584206_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=aaLM4tRZqr8Q7kNvgExWT7N&_nc_zt=24&_nc_ht=scontent-nrt1-2.xx&_nc_gid=AZhoTYOH3pjUsm6fR2XuVbS&oh=00_AYCeQullCy9PZex5cXIwYRxVDL3n39rl-iJx7SHUcR7zGg&oe=672BA5AA"
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-semibold">Kalok Cerilla</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Check className="text-green-500 cursor-pointer w-4" />
          <X className="text-red-500 cursor-pointer w-4" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2dda23ba-d9d2-48b0-9ed9-897af5f30d52/dfg9wfd-06e04f0a-83f9-4cb6-b027-cb5cfca5a63d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkZGEyM2JhLWQ5ZDItNDhiMC05ZWQ5LTg5N2FmNWYzMGQ1MlwvZGZnOXdmZC0wNmUwNGYwYS04M2Y5LTRjYjYtYjAyNy1jYjVjZmNhNWE2M2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pIT4_sgjbsCXk5RwIjAeHaXVU0Kqu7BNBJlNR7NsxCU"
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-semibold">A.C. Void</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Check className="text-green-500 cursor-pointer w-4" />
          <X className="text-red-500 cursor-pointer w-4" />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
