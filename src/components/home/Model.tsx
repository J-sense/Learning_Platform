import React, { ReactNode } from 'react';
import { MdAddToDrive, MdOutlineFileCopy } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";
import { BsCloudUpload } from "react-icons/bs";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;  
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 max-w-4xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">
          ✕
        </button>
        <div className="w-full">
          <h2 className="font-bold text-2xl text-black mb-2">To apply as a tutor</h2>
          <p className="text-sm mb-4">Provide essential information about your qualifications, experience, and teaching style.</p>


          <div>
            <h4 className="mb-2 font-semibold text-lg">Program</h4>
            <div className="border border-green-800 px-4 py-2 w-1/3 rounded-lg mb-4">
              <input type="checkbox" />
            </div>

      
            <div className="flex gap-3 mb-2">
              <input type="text" className="p-2 w-1/2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="First Name" />
              <input type="email" className="p-2 w-1/2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Email Address" />
            </div>
            <div className="flex gap-3 mb-2">
              <input type="email" className="p-2 w-1/2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Email Address" />
              <input type="number" className="p-2 w-1/2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Phone Number" />
            </div>


            <div className="flex gap-3 mb-4">
              <select className="p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
              <select className="p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Experience</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
              </select>
            </div>

      
            <div className="flex gap-3 mb-4">
              <select className="p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Select Program</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="graphic-design">Graphic Design</option>
              </select>
              <select className="p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Select Class</option>
                <option value="class-1">Class 1</option>
                <option value="class-2">Class 2</option>
                <option value="class-3">Class 3</option>
              </select>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold">Curriculum vitae</p>
              <div className="w-full h-24 bg-slate-200 rounded-lg p-3 flex flex-col justify-center items-center">
                <div className="flex justify-between w-full mb-2">
                  <div className="flex text-xl gap-2">
                    <MdAddToDrive />
                    <MdOutlineFileCopy />
                  </div>
                  <div className="flex text-xl gap-2">
                    <FaListUl />
                    <LuBookMarked />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-sm">
                  <BsCloudUpload />
                  <p>
                    Drag Your File(s) <span className="text-green-600 font-semibold">Browse</span>
                  </p>
                  <p>Max 10 MB files are allowed</p>
                </div>
              </div>
            </div>

          
            <div className="mb-4">
              <p className="text-lg font-semibold">Video resume</p>
              <div className="w-full h-24 bg-slate-200 rounded-lg p-3 flex flex-col justify-center items-center">
                <div className="flex justify-between w-full mb-2">
                  <div className="flex text-xl gap-2">
                    <MdAddToDrive />
                    <MdOutlineFileCopy />
                  </div>
                  <div className="flex text-xl gap-2">
                    <FaListUl />
                    <LuBookMarked />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-sm">
                  <BsCloudUpload />
                  <p>
                    Drag Your File(s) <span className="text-green-600 font-semibold">Browse</span>
                  </p>
                  <p>Max 10 MB files are allowed</p>
                </div>
              </div>
            </div>

          
            <div className="flex justify-center mt-4">
              <button
                onClick={onClose}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
