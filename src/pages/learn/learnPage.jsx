import React from "react";
import {  NavLink, useLoaderData } from "react-router-dom";
import { HiLockClosed, HiOutlineBookOpen, HiStar } from 'react-icons/hi'
import { useQuery } from "@tanstack/react-query";
function LearnPage() {
  const courses = useLoaderData();
 
  
  const elements = courses.map((course) => {
    return (
      <NavLink className="w-full flex items-center justify-between border rounded-md p-2 border-gray-200" to={`/learn/${course.name}`} key={course._id} >
        <div className="flex items-center gap-2">
         <HiOutlineBookOpen className="border text-2xl rounded-full p-1"/>
        <p>{course.title}</p>

        </div>
        <div className="flex items-center gap-2 ">
        <p className="text-sm flex items-center text-gray-500">100  <HiStar className="text-yellow-500 text-xl" /> </p>
        <HiLockClosed className="text-lg text-gray-600"/>
        </div>
        {/* <p className="text-sm text-gray-500">Unlocked</p> */}
      </NavLink>
    );
  });
  return <div className="flex gap-2 flex-col p-4">{elements}</div>;
}

export default LearnPage;
