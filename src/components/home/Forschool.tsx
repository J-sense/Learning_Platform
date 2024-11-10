import React from 'react';
// import Heading from '../shared/Heading';
import parent from '../../assets/school.png';
import Image from 'next/image';
import { LuArrowRight } from "react-icons/lu";
import group from "../../assets/Group 1883.png"

const Forschool = () => {
  return (
    <div className="py-10  md:px-8 mt-22">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        
      
       

       
        <div className="flex justify-center relative">
          <Image
            src={parent} 
            height={426}
            width={603}
            alt="parent"
            className="object-cover rounded-xl shadow-lg"
          />
          <Image 
          className='absolute bottom-0 right-0'
          src={group}
          alt='group'
          height={192}
          width={135}/>
        </div>
        <div>
        <div className='md:text-3xl text-2xl text-black font-bold'>
        <div className='w-16 bg-green-900 border-t-8 border-[#028D02]'></div>
            For <span className="text-[#ff8c00]">School</span>
          </div>
          <p className="text-primary text-base md:text-lg my-4">
          Manage professional development and online tutoring with ease. Our programs improves student outcomes, empower educators and leads to a more effective and inclusive learning environment
          </p>
          <button className="w-auto rounded-full px-7 py-2 border text-white bg-gradient-to-r from-[#03c634] to-[#009300] mt-4 md:mt-6 flex items-center">
         Learn More <LuArrowRight />

          </button>
        </div>
      </div>
    </div>
  );
}

export default Forschool;
