import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Breiana</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Breiana</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Breiana</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Breiana</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Breiana</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Breiana</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Breiana</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
