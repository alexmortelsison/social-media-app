import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsEmojiSmileFill } from "react-icons/bs";
import {
  CalendarRange,
  ChartAreaIcon,
  ChartBar,
  ChartNoAxesGantt,
  Image,
  Video,
} from "lucide-react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            placeholder="What's on your mind"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <BsEmojiSmileFill className="text-primary w-5 h-5 cursor-pointer self-end" />
        </div>

        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image className="text-primary" />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Video className="text-primary" />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <CalendarRange className="text-primary" />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <ChartNoAxesGantt className="text-primary" />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
