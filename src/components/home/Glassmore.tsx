import React from 'react';
import bg from '@/assets/glassmore.png';
import { LuArrowRight } from 'react-icons/lu';
import icon from '@/assets/icon.png';
import Image from 'next/image';
import msg from '@/assets/text.png';
import text from '@/assets/msg.png';

const Glassmore = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex items-center justify-center sm:h-[40vh] md:h-[378px] object-contain relative p-4"
    >
      <div className="backdrop-blur-sm bg-[#ffffff]/50 px-6 py-8 rounded-lg w-full sm:max-w-[90%] md:max-w-[60%] lg:max-w-[50%] flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl text-white font-bold sm:text-[28px] md:text-[36px]">
            Tuition from 114 / month
          </h1>
          <p className="text-black mt-2">Get expert online tuition for personalized learning</p>
          <button className="w-auto rounded-full px-7 py-2 border text-white bg-gradient-to-r from-[#03c634] to-[#009300] mt-4 md:mt-6 flex items-center justify-center space-x-2">
            Learn More <LuArrowRight />
          </button>
        </div>
        <div className="flex justify-center">
          <Image src={icon} alt="icon" height={70} width={70} />
        </div>
      </div>

      {/* Position the `msg` and `text` images responsively */}
      <Image
        src={msg}
        alt="msgIcon"
        height={70}
        width={70}
        className="absolute top-4 right-4 md:top-4 md:right-36"
      />
      <Image
        src={text}
        alt="textIcon"
       
        className="absolute -top-28 right-10 sm:-top-28 sm:right-16 lg:-top-52 lg:right-32 h-[100px] w-[250px] md:h-[214px] md:w-[533px]" 
      />
    </div>
  );
};

export default Glassmore;
