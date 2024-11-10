import React from 'react';

import parent from '../../assets/parent.png';
import Image from 'next/image';
import { LuArrowRight } from "react-icons/lu";
import group from "../../assets/Group 1883.png"

const ForParent = () => {
  return (
    <div className="py-10  md:px-8 md:mt-32">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        
      
        <div>
          <div className='md:text-3xl text-2xl text-black font-bold'>
          <div className='w-16 bg-green-900 border-t-8 border-[#028D02]'></div>
            For <span className="text-[#ff8c00]">Parents</span>
          </div>
          <p className="text-primary text-base md:text-lg my-4">
          As a parent, stay involved in your child&s learning journey. Track their progress, view assignments, and receive updates on their achievements. Our platform ensures you're always connected to their educational growth.
          </p>
          <button className="w-auto rounded-full px-7 py-2 border text-white bg-gradient-to-r from-[#03c634] to-[#009300] mt-4 md:mt-6 flex items-center">
         Learn More <LuArrowRight />

          </button>
        </div>

       
        <div className="flex justify-center relative">
          <Image
            src={parent} 
            height={426}
            width={603}
            alt="parent"
            className="object-cover rounded-xl shadow-lg" 
          />
          <Image 
          className='absolute bottom-0 left-0'
          src={group}
          alt='group'
          height={192}
          width={135}/>
        </div>
      </div>
    </div>
  );
}

export default ForParent;
