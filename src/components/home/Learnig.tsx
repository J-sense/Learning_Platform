import React from 'react';
import bg from '@/assets/bg-learning.png';
import img1 from "@/assets/learnign1.png";
import img2 from "@/assets/learning2.png";
import img3 from "@/assets/learning3.png";
import img4 from "@/assets/learning4.png";
import Image from 'next/image';
import { LuArrowRight } from 'react-icons/lu';

const Learnig = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex items-center justify-center sm:h-[100vh] md:h-[772px]"
    >
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6 md:p-12">
        
        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <Image src={img1} alt="imgONE" height={269} width={162} className="object-contain" />
          <div className="flex md:block space-y-6 sm:space-x-3 gap-3  items-center justify-center">
            <Image src={img2} alt="imgTWO" height={269} width={162} className="object-contain" />
            <Image src={img3} alt="imgTHREE" height={269} width={168} className="object-contain" />
          </div>
          <Image src={img4} alt="imgFOUR" height={269} width={162} className="object-contain" />
        </div>

        {/* Text Content Section */}
        <div className="md:text-left">
        <div className='w-16 bg-green-900 border-t-8 border-[#028D02]'></div>
          <h2 className="md:text-3xl text-2xl text-black font-bold">
            Learning <span className="text-[#ff8c00]">Resources</span>
          </h2>
          <p className="text-primary text-base md:text-lg my-4">
            Manage professional development and online tutoring with ease. Our programs improve student outcomes, empower educators, and lead to a more effective and inclusive learning environment.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="w-auto rounded-full px-7 py-2 border text-white bg-gradient-to-r from-[#03c634] to-[#009300] mt-4 md:mt-6 flex items-center gap-2">
              Learn More <LuArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learnig;
