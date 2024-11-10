// 'use client'
// import React, { useState } from 'react'
// import Heading from '../shared/Heading'
// import img1 from "@/assets/picone.jpeg"
// import img2 from "@/assets/pictwo.jpeg"
// import img3 from "@/assets/picthree.jpeg"
// import Image from 'next/image'

// interface LearningItem {
//   image: string;
//   title: string;
//   keyStage: string;
// }

// const items: LearningItem[] = [
//   { image: img1, title: 'Key Stage 1 Learning', keyStage: 'Key Stage 1' },
//   { image: img2, title: 'Key Stage 2 Learning', keyStage: 'Key Stage 2' },
//   { image: img3, title: 'Key Stage 3 Learning', keyStage: 'Key Stage 3' },
// ];

// const TuitionProgram = () => {
//   return (
//     <div className='mt-14 bg-[#f3fff3] h-[711px]'>
//       <div className='max-w-[85%] mx-auto'>
//         <div className='text-center pt-10'>
//           <Heading>
//             Our Tuition <span className='text-[#ffbc00]'>Program</span>
//           </Heading>
//           <p className='text-primary text-sm'>
//             Discover what your child can achieve with a brilliant tutor and a curriculum tailored to their individual needs.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
//         {items.map((item, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//             <Image src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
//             <h3 className="text-xl font-bold mt-4">{item.title}</h3>
//             <p className="text-gray-600">{item.keyStage}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TuitionProgram;
