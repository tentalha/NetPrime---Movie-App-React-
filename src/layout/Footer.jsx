import React from "react";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <footer className="flex items-center justify-center  p-4 text-xs  bg-[#c3c7c7]">
      <BiCopyright />
      <small className='ml-1'>Copyright 2022-2023 tentalha | All Rights Reserved.</small>
    </footer>
  );
}

export default Footer;
