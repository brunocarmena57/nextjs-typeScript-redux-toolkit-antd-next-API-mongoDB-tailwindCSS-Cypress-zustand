"use client"

import Sidebar from "@/components/Sidebar";
import React from "react";


interface IChildren {
    children: React.ReactNode;
};
const Template = ({ children }: IChildren) => {
    return (
        <>
            <div className="flex items-start w-full">
                <Sidebar />
                <div className="p-[1.5rem] bg-[#F9FAFB] w-full h-screen">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Template;
