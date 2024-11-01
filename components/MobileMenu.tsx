import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignCenterIcon } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignCenterIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/"}></Link>Home
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/"}></Link>Friends
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/"}></Link>Groups
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/"}></Link>Stories
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
