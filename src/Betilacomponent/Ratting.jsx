import React from 'react';
import { Star } from 'lucide-react';

const ratings = [
  { stars: 5, count: 480 },
  { stars: 4, count: 200 },
  { stars: 3, count: 100 },
  { stars: 2, count: 35 },
  { stars: 1, count: 19 },
];

const totalReviews = ratings.reduce((sum, item) => sum + item.count, 0);


function Ratting() {
  return (
    <>
        <div className="max-w-6xl mx-auto mt-10 p-4 ">
      <div className="flex items-start gap-8 flex-wrap">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏅</span>
            <h3 className="text-2xl font-bold">Overall rating</h3>
          </div>
          <p className="text-gray-500">{totalReviews} Reviews</p>
          <div className="flex gap-1">
            {Array(5)
              .fill()
              .map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 space-y-2 w-full md:w-2/3">
          {ratings.map((item, idx) => {
            const percentage = (item.count / totalReviews) * 100;
            return (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-16 text-sm text-gray-600">{item.stars} stars</span>
                <div className="w-full h-3 bg-gray-200 rounded">
                  <div
                    className="h-3 bg-blue-500 rounded"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Ratting