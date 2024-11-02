import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">User Media</span>
        <Link href={"/"} className="text-blue-500 text-sm">
          see all
        </Link>
      </div>

      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
            }
            alt={"story1"}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
