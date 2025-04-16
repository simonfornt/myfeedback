import React from 'react';

function Footer() {
  const aboutItems = [
    'About MyFeedback',
    'Investor Relations',
    'Trust & Safety',
    'Content Guidelines',
    'Terms of Service',
    'Privacy Policy',
    'Your Privacy Choices',
  ];

  const feedbackItems = [
    'MyFeedback for business',
    'Collection',
    'Talk',
    'Events',
    'MyFeedback blog',
    'Support',
    'Developers',
  ];

  const languages = ['English', 'Saab', 'Opel', 'Audi'];
  const countries = ['Singapore', 'Saab', 'Opel', 'Audi'];

  return (
    <div className='border-t border-gray-300 bg-white'>
      <div className='w-11/12 max-w-4xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

        {/* About Section */}
        <div>
          <h2 className='font-extrabold font-lexend text-xl md:text-2xl text-[#1E1E1E] mb-3'>About</h2>
          <ul className='space-y-2'>
            {aboutItems.map((item, index) => (
              <li
                key={index}
                className='font-robot text-[#5E5E5E] text-sm md:text-base hover:underline cursor-pointer'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* MyFeedback Section */}
        <div>
          <h2 className='font-extrabold font-lexend text-xl md:text-2xl text-[#1E1E1E] mb-3'>MyFeedback</h2>
          <ul className='space-y-2'>
            {feedbackItems.map((item, index) => (
              <li
                key={index}
                className='font-robot text-[#5E5E5E] text-sm md:text-base hover:underline cursor-pointer'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Language & Country Selection */}
        <div className='space-y-6'>
          <div>
            <h2 className='text-xl md:text-2xl font-bold font-lexend mb-2'>Languages</h2>
            <select
              name="languages"
              id="languages"
              aria-label="Select language"
              className='text-[#5E5E5E] font-robot  rounded px-3 py-2 '
            >
              {languages.map((lang, index) => (
                <option key={index} value={lang.toLowerCase()}>{lang}</option>
              ))}
            </select>
          </div>

          <div>
            <h2 className='text-xl md:text-2xl font-bold font-lexend mb-2'>Countries</h2>
            <select
              name="countries"
              id="countries"
              aria-label="Select country"
              className='text-[#5E5E5E] font-robot  rounded px-3 py-2 '
            >
              {countries.map((country, index) => (
                <option key={index} value={country.toLowerCase()}>{country}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='py-6 bg-gray-100'>
        <p className='text-center text-xs md:text-sm font-robot font-semibold text-[#5E5E5E] px-4'>
         Copyright &copy; September 2023 MyFeedback, Designed by Scott
        </p>
      </div>
    </div>
  );
}

export default Footer;
