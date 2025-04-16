import React from 'react';

function CtaSection() {
  return (
    <div className="bg-[#F2F2F2] py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-lexend">
            MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6 font-robot">
            The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
          </p>
          <button className="text-white bg-black py-2 px-6 sm:px-8 rounded-full text-sm sm:text-base font-robot">
            Explore MyFeedback business
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img src="cta.png" alt="CTA" className="w-full max-w-sm md:max-w-full" />
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
