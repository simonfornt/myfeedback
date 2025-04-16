import React from 'react';

function ActiviteCard({
  avatar,
  name,
  location,
  date,
  ratingIcon,
  feedback = [],
  images = [],
  linkText = 'Discover',
  linkHref = '#',
}) {
  return (
    <div className="bg-[#F8F8F8] w-full max-w-md p-6 rounded-lg shadow-sm">
      {/* Profile section */}
      <div className="flex gap-3 items-center mb-4">
        <img src={avatar} alt="Avatar" className="" />
        <div>
          <h4 className="text-xl font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-2 items-center mb-4">
        <img src={ratingIcon} alt="Rating" className=" h-4" />
        <p className="text-sm text-gray-600">{date}</p>
      </div>

      {/* Feedback Content */}
      <div className="text-sm text-gray-700 mb-4 space-y-3">
        {feedback.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      {/* Images */}
      <div className="flex gap-3 mb-4">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Image ${index + 1}`}
            className=" object-cover rounded-md"
          />
        ))}
      </div>

      {/* Link */}
      <a href={linkHref} className="text-sm  underline">
        {linkText}
      </a>
    </div>
  );
}

export default ActiviteCard;
