'use client';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import vector from "@/assets/Vector.png";
import Image from 'next/image';
import person from"@/assets/person.png"

interface str {
  id: number;
  descripton: string;
  image: any;
  rating: number;
  text: string;
}

const testimonials: str[] = [
  {
    id: 1,
    descripton: 'This platform has completely transformed our learning experience. The tailored lessons and interactive content keep my child motivated. We highly recommend it!',
    image: vector,
    rating: 5,
    text: 'Exceptional platform for personalized learning!',
  },
  {
    id: 2,
    descripton: 'The content is both engaging and educational, and my child looks forward to each session. The progress is evident, and it fits our busy schedule well.',
    image: vector,
    rating: 4,
    text: 'Perfect blend of fun and learning!',
  },
  {
    id: 3,
    descripton: 'We’ve tried a few platforms, but this one stands out. It’s easy to navigate, and the interactive lessons hold my child’s attention much better than other methods.',
    image: vector,
    rating: 4,
    text: 'Highly recommended for kids!',
  },
];

export default function CustomTestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { descripton, image, rating, text } = testimonials[currentSlide];

  return (
    <div className='bg-[#f3fff3]'>

    <div className="testimonial-slider relative h-[439px] max-w-[85%] mx-auto  flex items-center justify-center px-4 sm:px-8 md:px-12">
      {/* Left Arrow Icon */}
      <FaArrowLeft
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 md:left-8 text-3xl text-green-500 cursor-pointer transform -translate-y-1/2 top-1/2"
      />

      <div className="testimonial-item text-center p-6 max-w-full sm:max-w-[85%] mx-auto">
        <Image
          src={image}
          alt={text}
          className="testimonial-image w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4"
        />
        <h3 className="testimonial-name text-lg text-black font-semibold">{text}</h3>
        <div className="testimonial-rating flex justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < rating ? 'green' : 'gray'}
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.211-6.002 5.841 1.431 8.35-7.429-3.905-7.428 3.905 1.43-8.35-6.003-5.841 8.332-1.211z" />
            </svg>
          ))}
        </div>
        <p className="testimonial-text text-gray-700 text-sm text-justify">{descripton}</p>
        <div className='items-center flex justify-center mt-2 gap-2'>
          <Image src={person} alt='user' height={30} width={30} /> 
          <p className='text-base text-primary'>John Duo</p>
        </div>
      </div>

      {/* Right Arrow Icon */}
      <FaArrowRight
        onClick={handleNext}
        className="absolute right-2 sm:right-4 md:right-8 text-3xl text-green-500 cursor-pointer transform -translate-y-1/2 top-1/2"
      />
    </div>
    </div>
  );
}
