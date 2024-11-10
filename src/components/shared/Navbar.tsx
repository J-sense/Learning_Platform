'use client'
import { useState } from 'react';
import Link from 'next/link';
import logo from "@/assets/logo.jpeg";
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LuChevronDown } from "react-icons/lu";
import Modal from '../home/Model';
// Import React Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // Toggle the navbar menu visibility on mobile devices
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-black w-full mx-auto bg-white ">
      <div className="max-w-[1150px] mx-auto flex justify-between items-center px-4 ">
        {/* Logo Section (Left) */}
        <div className="text-xl font-semibold">
          <Link href="/">
            <Image 
              src={logo} 
              width={107} 
              height={80} 
              alt="Website Logo"
            />
          </Link>
        </div>

        {/* Desktop Navbar Menu (Middle) */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" >Home </Link>
          <Link href="/about" className='flex gap-1 items-center'>Online Tuition <LuChevronDown /></Link>
          <Link href="/services" className='flex gap-1 items-center'>Personal Development <LuChevronDown /></Link>
          <Link href="/contact" className='flex gap-1 items-center'>Resources <LuChevronDown /></Link>
        </div>

        {/* Desktop Buttons (Right) */}
        <div className="hidden md:flex gap-4">
          <button className="rounded-full xl px-5 py-2 border tracking-wide text-primary">
            <li onClick={() => setModalOpen(true)}> Apply as Tutor</li>
          </button>
          <button className="rounded-full xl border text-white px-6 py-2 bg-gradient-to-r from-[#03c634] to-[#009300]">
            <Link href="/signup">Log in</Link>
          </button>
        </div>

        {/* Mobile Menu Button with React Icons */}
        <button
          className="md:hidden flex items-center space-x-2"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-black" />  // Close icon
          ) : (
            <FaBars className="w-6 h-6 text-black" />  // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu (Responsive) */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden mt-4 space-y-4 px-6 pb-4 bg-white`}
      >
        <Link href="/" className="block py-2 text-lg">Home</Link>
        <Link href="/about" className="block py-2 text-lg">Online Tuition</Link>
        <Link href="/services" className="block py-2 text-lg">Personal Development</Link>
        <Link href="/contact" className="block py-2 text-lg">Resources</Link>
        <Link href="/signup" className="block py-2 text-lg">Sign Up</Link>
        <div className="mt-4">
          <button className="w-full rounded-full xl px-5 py-2 border tracking-wide text-primary mb-2">
            <Link href="/tuiton">Apply as Tutor</Link>
          </button>
          <button className="w-full rounded-full xl px-6 py-2 border text-white bg-gradient-to-r from-[#03c634] to-[#009300]">
            <Link href="/signup">Log in</Link>
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} >
        <div className=' w-full'>

        <h2 className="text-xl font-bold">to apply as a tutor!</h2>
        <p>You’ll need to provide some essential information about your qualifications, experience, and teaching style.</p>
        <button onClick={() => setModalOpen(false)} className="close-button-class">
          Close
        </button>
        </div>
       
      </Modal>
    </nav>
  );
};

export default Navbar;
