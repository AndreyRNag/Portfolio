import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2F2F2F] mt-36 w-full text-white py-8"> {/* Mudei para bg-gray-800 */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Andrey Nagata</h3>
            <p className="text-gray-400">
              Front-End Developer especializado em web e
              software development.
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Andrey Nagata
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.linkedin.com/in/andrey-nagata-853151280/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AndreyRNag" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>    
        </div>
      </div>
    </footer>
  );
};

export default Footer;