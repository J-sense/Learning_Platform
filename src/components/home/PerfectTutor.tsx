import React from 'react';
import Heading from '../shared/Heading';

const PerfectTutor = () => {
  return (
    <div className='max-w-[85%] mx-auto mt-[60px] md:mt-[120px] sm:p-5 pb-[150px] md:pb-0'>
      <div className='w-16 bg-green-900 border-t-8 border-[#028D02]'></div>
      <Heading>
        Whatever the Learning Need, We Have the <span className='text-[#ff8c00]'>Perfect Tutor for Your Child!</span>
      </Heading>
      <div className='h-[385px] flex flex-col sm:flex-row justify-around mt-28 gap-28 md:gap-2'>
        {/* Left Section */}
        <div className='relative w-full sm:w-[35%] '>
          <div className='absolute top-0 right-0 pb-6'>
          <h3 className='text-[20px] font-semibold text-black'>Identify Gaps & Learning Needs</h3>
            <p className='text-primary text-base'>The outcome of the assessment places each child on the level they are required to work towards or exceed</p>
          </div>
          <div className='absolute bottom-0 left-0'>
            <h3 className='text-[20px] font-semibold text-black'>Identify Gaps & Learning Needs</h3>
            <p className='text-primary text-base'>The outcome of the assessment places each child on the level they are required to work towards or exceed</p>
          </div>
        </div>

        {/* Middle Section (Centered Circle) */}
        <div className="flex justify-center items-center h-[400px] sm:h-[385px] md:h-[385px]">
          <div className="w-[70%] sm:w-[30%] flex justify-center items-center">
            <div className="border-2 border-black border-dotted rounded-full p-12">
              <div className="border-2 border-black border-dotted rounded-full h-44 w-44 flex items-center justify-center">
                <div className="text-lg leading-tight text-center">
                  <h3 className='text-black font-semibold text-3xl'>
                    Our <h1 className="text-[#15A359]">Process</h1>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='relative w-full sm:w-[35%]'>
          <div className='absolute top-0 right-0'>
            <h3 className='text-[20px] font-semibold text-black'>Identify Gaps & Learning Needs</h3>
            <p className='text-primary text-base'>The outcome of the assessment places each child on the level they are required to work towards or exceed</p>
          </div>
          <div className='absolute bottom-0 left-0'>
            <h3 className='text-[20px] font-semibold text-black'>Identify Gaps & Learning Needs</h3>
            <p className='text-primary text-base'>The outcome of the assessment places each child on the level they are required to work towards or exceed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectTutor;
