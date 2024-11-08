import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BsEmojiSmileFill } from "react-icons/bs";
import { MoreHorizontalIcon, ThumbsUpIcon } from "lucide-react";

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/alex.jpg" className="object-cover" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <BsEmojiSmileFill className="text-primary w-5 h-5 cursor-pointer self-end" />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/wifey.jpg" className="object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">Katherine Sison</span>
              <MoreHorizontalIcon className="w-4 cursor-pointer ml-auto" />
            </div>

            <p className="mt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              distinctio, maiores officiis aliquid asperiores omnis labore
              quaerat recusandae aperiam, molestiae consequuntur veniam
              dignissimos consectetur illo impedit adipisci? Obcaecati, quod
              perferendis.
            </p>

            <div className="flex items-center gap-8 text-sm text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <ThumbsUpIcon
                  size={16}
                  className="cursor-pointer text-primary"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div>Reply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
