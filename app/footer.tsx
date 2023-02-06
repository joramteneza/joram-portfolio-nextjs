import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { RxReader } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="m-0 lg:m-8">
      <div className="bg-primary-600 w-full h-[1px]"></div>
      <div className="flex flex-col md:flex-row justify-between mt-10 mb-20">
        <div className="flex gap-12 mb-8">
          <FiInstagram size={32} color="#e5a932" />
          <FaLinkedin size={32} color="#e5a932" />
          <div className="rotate-12">
            <RxReader className="rotate-12" size={36} color="#e5a932" />
          </div>
        </div>
        <div className="text-primary-600 tracking-wider">
          © Joram Teneza. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
