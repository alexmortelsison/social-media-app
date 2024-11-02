import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  MessageCircleMore,
  MoreHorizontalIcon,
  Share,
  ThumbsUpIcon,
} from "lucide-react";
import Image from "next/image";
import Comments from "./Comments";

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
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/8755965/pexels-photo-8755965.jpeg"
            }
            alt={"post"}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          dolorem! Ad accusantium perspiciatis quos dolorum ullam dolores, in
          provident officia ipsa cum asperiores sit ratione rem, omnis a
          assumenda laboriosam!
        </p>
      </div>

      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <ThumbsUpIcon size={16} className="cursor-pointer text-primary" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 flex">
              123&nbsp;<span className="hidden md:inline">Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <MessageCircleMore
              size={16}
              className="cursor-pointer text-primary"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 flex">
              123&nbsp;
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Share size={16} className="cursor-pointer text-primary" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 flex">
              123&nbsp;<span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
