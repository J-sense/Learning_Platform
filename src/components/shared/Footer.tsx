import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f3fff3] text-black py-10">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 lg:gap-24">
          
          {/* Company Info Section */}
          <div className="flex flex-col items-start space-y-4 max-w-xs">
            <h2 className="text-3xl font-semibold text-black">United UI</h2>
            <p className="text-xl text-[#ffbc00]">Join the Community</p>
          
            <div className="md:flex items-center gap-3 w-full ">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-grow bg-slate-200 py-2 px-2 rounded-3xl"
              />
              <button className="flex items-center px-2 py-2 rounded-full text-white bg-gradient-to-r from-[#03c634] to-[#009300] mt-2 md:mt-0">
                SUBSCRIBE <LuArrowRight className="ml-2" />
              </button>
            </div>
            <p className="text-sm">
              By subscribing you agree with our Privacy Policy
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-lg font-semibold text-purple-800">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-800">Home</a></li>
              <li><a href="#" className="hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800">Services</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-lg font-semibold text-purple-800">Policy</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-800">Privacy Policy</li>
              <li className="hover:text-gray-800">Terms Of Service</li>
              <li className="hover:text-gray-800">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} United UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
