"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import { LuMoveRight, LuCheck } from "react-icons/lu";
import banner from '@/assets/bannerimg.jpeg';
import fram from '@/assets/frame2.png';
import frame2 from '@/assets/fram1.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='max-w-[85%] mx-auto bg-[#EBFFEB] h-auto rounded-2xl p-6 md:p-10'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Left Section */}
        <div>
          <h1 className='text-[32px] sm:text-[36px] md:text-[48px] font-thin'>
            Let’s Ignite Your Child’s <br />
            <span className='text-[#ff8c00] font-thin'>Love for Learning</span>
          </h1>
          <p className='text-primary text-[16px] sm:text-[18px] md:text-[20px] mt-4'>
            We nurture curiosity, critical thinking, and academic achievement through virtual classes, fun activities, and games, making learning engaging and accessible.
          </p>
          <button className="mt-6 rounded-full xl border flex gap-2 items-center text-white px-6 py-2 bg-gradient-to-r from-[#03c634] to-[#009300]">
            Get 2 weeks free trial <LuMoveRight className='text-2xl' />
          </button>

          {/* Features List */}
          <div className='flex flex-col sm:flex-col md:flex-row space-y-3 sm:space-y-3 md:space-y-0 md:space-x-3 mt-6'>
            {['Experienced tutor', 'Engaging lessons', 'Flexible schedule'].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className='border p-1 rounded-full bg-orange-500 text-white font-extrabold'>
                  <LuCheck />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className='flex justify-center items-center relative mt-5 md:mt-0'>
          <div className="relative w-[250px] h-[250px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px]">
            <Image
              className="rounded-full object-cover w-full h-full"
              src={banner}
              alt="Website Logo"
            />

            {/* Overlay Images */}
            <div className="absolute -top-8 -left-12 sm:-top-6 sm:-left-10 md:-top-7 md:-left-16  sm:w-[45px] sm:h-[45px] md:w-[181px] md:h-[83px]">
              <Image 
                className="object-contain"
                src={fram}
                alt="Overlay Icon"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-12 sm:-bottom-6 sm:-right-12 md:-bottom-10 md:-right-24 md:w-[222px] md:h-[160px] sm:w-[45px] sm:h-[45px] rounded-md">
              <Image 
                className="object-contain "
                src={frame2}
                alt="Overlay Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Banner), { ssr: false });
