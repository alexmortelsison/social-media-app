import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BsEmojiSmileFill } from "react-icons/bs";
import { MoreHorizontalIcon, ThumbsUpIcon } from "lucide-react";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://images.pexels.com/photos/27545223/pexels-photo-27545223/free-photo-of-model-in-sweater-lying-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover"
          />
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

      {/* COMMENTS */}
      <div>
        {/* COMMENT */}
        <div className="flex items-center gap-4 justify-between mt-6">
          <div>
            {/* AVATAR */}
            <Avatar>
              <AvatarImage
                src="https://images.pexels.com/photos/19640832/pexels-photo-19640832/free-photo-of-untitled.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                className="object-cover"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            {/* DESC */}
            <span className="font-medium">Katherine Sison</span>
            <p>
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
          <div>
            {/* ICON */}
            <MoreHorizontalIcon className="w-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
