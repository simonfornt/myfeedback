import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  { name: 'All', icon: Home, path: '/' },
  { name: 'Restaurants', icon: UtensilsCrossed, path: '/restaurants' },
  { name: 'Hotels', icon: Building2, path: '' },
  { name: 'Home services', icon: HomeIcon, path: '' },
  { name: 'Shopping', icon: ShoppingBag, path: '' },
  { name: 'Car location', icon: CarFront, path: '' },
  { name: 'Beauty & Spa', icon: Brush, path: '' },
  { name: 'Park', icon: TreePalm, path: '' },
  { name: 'Museum', icon: Theater, path: '' },
  { name: 'Car wash', icon: ShowerHead, path: '' },
  { name: 'Bars', icon: Wine, path: '' },
  { name: 'Gyms', icon: Dumbbell, path: '' },
];

function MenuItem() {
  const [active, setActive] = useState('All');
  const [breadcrumb, setBreadcrumb] = useState(['All']);
  const navigate = useNavigate();
 

  const handleClick = (name, path) => {
    setActive(name);

    if (name === 'All') {
      setBreadcrumb(['All']);
    } else {
      setBreadcrumb(['All', name]);
    }

    if (path) {
      navigate(path, { replace: true });
    }
  };

  // Show MenuItem only on root path
  

  return (
    <div className="relative">
      {/* Breadcrumb */}
      <div className="px-4 pt-16 pb-2 text-sm text-gray-500">
        {breadcrumb.join(' / ')}
      </div>

      {/* Category Menu */}
      <div className="flex flex-wrap gap-4 px-3 md:px-5 py-3 justify-between">
        {categories.map(({ name, icon: Icon, path }) => (
          <div
            key={name}
            onClick={() => handleClick(name, path)}
            className={`flex flex-col items-center cursor-pointer transition-all duration-200 min-w-[70px] md:min-w-[90px] lg:min-w-[100px] ${
              active === name ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <Icon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm mt-1 text-center leading-tight px-1">
              {name}
            </span>
            {active === name && (
              <div className="h-1 w-4 md:w-6 bg-blue-600 rounded-full mt-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItem;
