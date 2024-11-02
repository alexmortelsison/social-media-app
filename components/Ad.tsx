"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { MoreHorizontal } from "lucide-react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center text-gray-500">
        <p>Sponsored Ads</p>
        <MoreHorizontal className="w-4" />
      </div>
      <Card className="py-4 items-center">
        <CardBody className="py-2 items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-4">
          <p className="text-tiny text-blue-500 font-bold">Big Chef Lounge</p>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tempore error sapiente hic!
          </p>
          <button className="bg-slate-200 w-full rounded-lg px-2 py-2 text-gray-500">
            Learn More
          </button>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Ad;
