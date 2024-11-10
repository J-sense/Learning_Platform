'use client';
import React from 'react';
import Heading from '../shared/Heading';
import img1 from "@/assets/picone.jpeg";
import img2 from "@/assets/pictwo.jpeg";
import img3 from "@/assets/picthree.jpeg";
import Image from 'next/image';
import { LuArrowRight } from "react-icons/lu";

// Declare types for the images
interface LearningItem {
  image: any; // image paths are now considered strings
  title: string;
  keyStage: string;
}

const items: LearningItem[] = [
  { image: img1, title: 'Math and English Tuition', keyStage: 'Key Stage 1' },
  { image: img2, title: '11 Plus and Entrance Exams', keyStage: 'Key Stage 2' },
  { image: img3, title: 'GCSE preparation and tutoring', keyStage: 'Key Stage 3' },
];

const TuitionProgram = () => {
  return (
    <div className="mt-16 bg-[#f3fff3] h-auto py-10">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto">
        <div className="text-center pt-6 md:pt-10">
          <Heading>
            Our Tuition <span className="text-[#ffbc00]">Program</span>
          </Heading>
          <p className="text-primary text-sm md:text-base lg:text-lg">
            Discover what your child can achieve with a brilliant tutor and a curriculum tailored to their individual needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg space-y-2 hover:bg-green-600 hover:text-white transition ease-in-out duration-300"
            >
              <Image
                src={item.image} // Use the imported image correctly
                alt={item.title}
                className="w-full h-40 md:h-48 object-cover rounded-md"
                width={500} 
                height={300}
              />
              <h3 className="text-lg md:text-xl font-bold mt-4 hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 md:text-gray-400">{item.keyStage}</p>
              <p className="flex gap-1 items-center text-sm md:text-base">
                Learn more <LuArrowRight />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TuitionProgram;
