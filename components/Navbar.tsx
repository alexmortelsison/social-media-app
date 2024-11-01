import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"} className="text-xl font-extrabold">
          SOCIA<span className="text-primary">LY</span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex gap-2 items-center"></Link>
          <Image
            src={"/home.png"}
            alt="Homepage"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Homepage</span>

          <Link href={"/"} className="flex gap-2 items-center"></Link>
          <Image
            src={"/friends.png"}
            alt="Friends"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Friends</span>

          <Link href={"/"} className="flex gap-2 items-center"></Link>
          <Image
            src={"/stories.png"}
            alt="Stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Stories</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
