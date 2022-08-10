import React from "react";
import { GoTelescope } from "react-icons/go";

function SideBar({item, icon}) {
  return (
    <div className=" text-center text-black hover:bg-blue-300 hover: rounded-3xl hover:text-white cursor-pointer p-2 flex flex-col items-center justify-center my-4">
      <img src={icon} alt="" className='h-10'/>
      <p className="text-center">{item}</p>
    </div>
  );
}

export default SideBar;
