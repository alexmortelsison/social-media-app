import { BsPeople } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { BookAIcon, GroupIcon, HomeIcon, LogIn, UsersRoundIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link
          href={"/"}
          className="text-xl md:text-4xl font-extrabold tracking-tighter"
        >
          SOCIA<span className="text-primary">LY</span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex gap-2 items-center">
            <HomeIcon />
            <span>Homepage</span>
          </Link>
          <Link href={"/friends"} className="flex gap-2 items-center">
            <UsersRoundIcon/>
            <span>Friends</span>
          </Link>
          <Link href={"/stories"} className="flex gap-2 items-center">
            <BookAIcon />
            <span>Stories</span>
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={"/people.png"} alt="People" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image
                src={"/messages.png"}
                alt="Messages"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src={"/notifications.png"}
                alt="Notifications"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
            <MobileMenu />
          </SignedIn>

          <SignedOut>
            <div className="flex gap-2 items-center">
              <LogIn className="h-4 w-4" />
              <Link href={"/sign-in"} className="text-sm">
                Login/Register
              </Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Navbar;
