"use server";
import React from "react";
import Link from "next/link";
import { ArrowRight, Bell } from "lucide-react";
import Image from "next/image";
import {
  getAllWorkSpacebyId,
  getAllWorkSpaces,
} from "@/app/service/workspace.service";
import { getUser } from "@/app/service/user.service";

export const BreadcrumbWithCustomSeparator = async () => {
  const { payload: userData } = await getUser();


  return (
    <header className="h-16 border-b border-[#e2e8f0] bg-white flex items-center px-6 justify-between">
      <div className="flex items-center space-x-2">
        <Link href="#" className="text-[#94a3b8] hover:text-[#1e293b]">
          Workspace
        </Link>
        <ArrowRight size={16} className="text-[#94a3b8]" />
        <Link href="#" className="text-[#4379f2] border-b">
          HRD
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-[#94a3b8] hover:text-[#1e293b]">
          <Bell size={20} />
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#4379f2] mr-2 overflow-hidden">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKk2lUxf2z_ssse6Vluac9oL-HVi_Pm7EOZg&s"
              alt="Profile"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-lg font-medium">{userData.username}</div>
            <div className="text-md text-[#009990]">{userData.email}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
