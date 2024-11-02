import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MoreHorizontalIcon } from "lucide-react";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://images.pexels.com/photos/27545223/pexels-photo-27545223/free-photo-of-model-in-sweater-lying-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-medium">Alex Sison</span>
        </div>
        <MoreHorizontalIcon className="w-4" />
      </div>

      {/* DESC */}
      <div></div>

      {/* INTERACTION */}
      <div></div>
    </div>
  );
};

export default Post;
