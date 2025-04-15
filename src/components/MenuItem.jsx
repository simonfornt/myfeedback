import React, { useState } from 'react';
import {
  Home,
  UtensilsCrossed,
  Building2,
  HomeIcon,
  ShoppingBag,
  CarFront,
  Brush,
  TreePalm,
  Theater,
  ShowerHead,
  Wine,
  Dumbbell,
} from 'lucide-react';

const categories = [
  { name: 'All', icon: <Home className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Restaurants', icon: <UtensilsCrossed className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Hotels', icon: <Building2 className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Home services', icon: <HomeIcon className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Shopping', icon: <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Car location', icon: <CarFront className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Beauty & Spa', icon: <Brush className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Park', icon: <TreePalm className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Museum', icon: <Theater className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Car wash', icon: <ShowerHead className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Bars', icon: <Wine className="w-4 h-4 md:w-5 md:h-5" /> },
  { name: 'Gyms', icon: <Dumbbell className="w-4 h-4 md:w-5 md:h-5" /> },
];

function MenuItem() {
  const [active, setActive] = useState('Restaurants');

  return (
    <div className="">
      <div className="flex flex-wrap gap-4 px-3 md:px-5 py-3 justify-between">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex flex-col items-center cursor-pointer transition-all duration-200 min-w-[70px] md:min-w-[90px] lg:min-w-[100px] ${
              active === cat.name ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div className="flex justify-center">{cat.icon}</div>
            <span className="text-xs md:text-sm mt-1 text-center leading-tight px-1">
              {cat.name}
            </span>
            {active === cat.name && (
              <div className="h-1 w-4 md:w-6 bg-blue-600 rounded-full mt-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItem;