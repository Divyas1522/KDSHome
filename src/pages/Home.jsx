


import React from 'react';
import { FaBootstrap, FaImage, FaShoppingCart, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="w-screen relative flex flex-col items-center justify-center " style={{ height: 'calc(100vh - 25px)', overflow: 'hidden' }}>
      {/* Background Image */}
      <img
        src="/de15ce4aee95a0147c3901b4458101786beb08d3(4).jpg"
        alt="background"
        className="w-full h-full object-cover  scale-125 translate-x-0 translate-y-0
    md:scale-150 md:translate-x-90 md:translate-y-40"
      />

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-[#146e74]/80 flex items-center justify-center flex-col">
        <div className='flex text-yellow-500 text-xl sm:text-2xl gap-1 pt-15'>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
          <p className='text-white tracking-wide text-sm sm:text-base'>4.8 (80+ reviews)</p>
        </div>

        {/* Main Headings */}
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-20 tracking-[0.02em] text-center'>Crafting exceptional</h2>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-[-4] text-center'>ecommerce <span className='bg-yellow-500 text-black'>experiences</span></h2>

        {/* Paragraph Centered */}
        <p className="text-base sm:text-lg md:text-xl pt-5 tracking-light text-white text-center px-6 sm:px-8 md:px-12">Partner with our real people agency for shopify and bigcommerce solution</p>

        <div className="w-230 flex items-center justify-center pt-2 relative">
          <div className='w-30 absolute flex justify-center items-center left-15'>
            <div className='p-38 flex items-center justify-center relative z-19'>
              <div className='w-30 h-30 flex justify-center items-center border-[#4d8caef5] p-4 backdrop-blur-md bg-black/10 border-2 rounded-3xl absolute z-20 right-35 bottom-35'>
                <FaShoppingCart className='text-5xl sm:text-4xl text-white' />
              </div>
            </div>
            <div className='w-25 h-25 flex justify-center items-center border-[#4d8caef5] p-4 backdrop-blur-md bg-black/10 border-2 rounded-3xl absolute z-20 right-20 bottom-35 top-45'>
              <FaImage className='text-5xl sm:text-4xl text-white' />
            </div>

            <div className='w-25 h-75 flex flex-col justify-center items-center border-[#4d8caef5]  border-2 backdrop-blur-md bg-black/10 rounded-3xl absolute z-25 left-25'>
              <div className='bg-[#36C31C] w-13 h-13 rounded-full border-[#36C31C] border-2 absolute z-40 top-10'>
                <img src="/b9f7be7acec4d987fc868c5d7f9c9e4b8f6c036a.png" alt="" className='absolute w-8 bottom-5 left-6' />
              </div>
              <div className='bg-[#FFFFFF] w-13 h-13 rounded-full border-[#FFFFFF] border-2 absolute z-40'></div>
              <div className='bg-[#A0A0A0] w-13 h-13 rounded-full border-[#A0A0A0] border-2 absolute z-40 bottom-10'></div>
            </div>
          </div>

          <div className='w-195 flex items-center justify-center relative left-13'>
            <img src="9607bc2bb0eab1e44d223566d063ba1183dbcb91.png" alt="" />
            <img src="Screenshot 2025-04-23 235320.png" alt="" className='absolute w-150 p-2 bg-black' />
          </div>

          <div className='w-33 h-55 absolute flex justify-center items-center right-2 top-40'>
            <div className='w-22 h-22 text-3xl text-white flex justify-center items-center rounded-3xl border-2 border-[#4d8caef5] backdrop-blur-md bg-black/10 absolute left-12 bottom-33'>Aa</div>

            <div className='w-25 h-25 backdrop-blur-md bg-black/10 absolute bottom-0 right-8 rounded-3xl border-[#4d8caef5]  border-2 flex justify-center items-center text-white'>
              <FaBootstrap className='w-15 h-15 text-3xl sm:text-4xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
