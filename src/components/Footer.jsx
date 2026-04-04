import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-transparent backdrop-blur-md py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
        <p className="text-gray-400 text-sm font-mono mb-4 md:mb-0">
          © {new Date().getFullYear()} Developed By Sachintha Dissanayaka
          <span className="text-brand-cyan ml-2"></span>
        </p>

        <div className="flex space-x-6">
          <a href="https://github.com/sachilz" className="text-gray-500 hover:text-white transition"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/sachilz/" className="text-gray-500 hover:text-white transition"><FaLinkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
