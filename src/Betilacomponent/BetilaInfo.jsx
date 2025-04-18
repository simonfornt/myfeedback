import React from 'react';
import {
  UtensilsCrossed,
  Phone,
  MapPin,
  Clock,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  MessageCircleMore
} from 'lucide-react';

function BetilaInfo() {
  return (
    <div className="mb-10 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side - Info List */}
        <div className="flex-1">
          <h3 className="font-lexend font-semibold text-4xl mb-6">More Informations</h3>
          <ul className="list-none space-y-3 text-gray-700 text-base mb-6">
            <li className="flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-blue-500" />
              See the menu
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-500" />
              +847 87 37 29 01
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              Singapour, Bishan
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              7j/7, 08:00 - 22:00
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              www.bellaitalia.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 items-center">
            <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-800 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-sky-400 hover:text-sky-600 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-green-500 hover:text-green-700 transition">
              <MessageCircleMore className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-pink-700 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-end items-center">
          <img
            src="infomapimg.png"
            alt="Map Location"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default BetilaInfo;
