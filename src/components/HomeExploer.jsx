// import React from 'react';

// const CitiesGrid = () => {
//   const cities = [
//     {
//       id: 1,
//       name: "Hyderabad",
//       image: "https://media.tenor.com/srLlLD6JBroAAAAM/charminar-hyd.gif",
//       color: "bg-orange-500"
//     },
//     {
//       id: 2,
//       name: "Bangalore",
//       image: "https://static.vecteezy.com/system/resources/thumbnails/028/172/687/small_2x/flat-silhouette-of-bangalore-city-bangalore-city-skyline-free-vector.jpg",
//       color: "bg-indigo-600"
//     },
//     {
//       id: 3,
//       name: "Mumbai",
//       image: "https://static.vecteezy.com/system/resources/thumbnails/000/129/154/small_2x/mumbai-landmark-free-vector.jpg",
//       color: "bg-blue-600"
//     },
//     {
//       id: 4,
//       name: "Delhi NCR",
//       image: "https://static.vecteezy.com/system/resources/thumbnails/070/475/590/small_2x/illustration-of-india-gate-with-saffron-white-and-green-brush-strokes-vector.jpg",
//       color: "bg-green-600"
//     },
//     {
//       id: 5,
//       name: "Chennai",
//       image: "https://static.vecteezy.com/system/resources/thumbnails/017/032/013/small_2x/outline-chennai-india-city-skyline-with-historic-buildings-and-reflections-isolated-on-white-vector.jpg",
//       color: "bg-red-600"
//     },
//     {
//       id: 6,
//       name: "Kolkata",
//       image: "https://static.vecteezy.com/system/resources/thumbnails/009/759/446/small_2x/kolkata-skyline-with-gray-landmarks-and-copy-space-vector.jpg",
//       color: "bg-purple-600"
//     }
//   ];

//   return (
//     <div className="py-12 rounded-lg w-full mx-auto sm:w-[80%]">
//       <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Explore Jobs by City
//       </h2>
      
//       <div className="mt-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-8 w-full px-4 mx-auto">
//         {cities.map((city) => (
//           <div 
//             key={city.id}
//             className="w-24 h-24 cursor-pointer group"
//           >
//             <div className="relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//               <img 
//                 alt={city.name}
//                 className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
//                 src={city.image}
//                 loading="lazy"
//               />
//             </div>
//             <div className="text-gray-900 text-center mt-2">
//               <h3 className="text-xl font-semibold">{city.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CitiesGrid;

import React, { useState } from 'react';



const CitiesGrid = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const cities = [
    {
      id: 1,
      name: "Hyderabad",
      bwImage: "https://realestatejobs-delta.vercel.app/cities/hyderabad_black.png",
      colorImage: "https://realestatejobs-delta.vercel.app/cities/hyderabad_color.png",
    },
    {
      id: 2,
      name: "Bangalore",
      bwImage: "https://realestatejobs-delta.vercel.app/cities/bengaluru_black.png",
      colorImage: "https://realestatejobs-delta.vercel.app/cities/bengaluru_color.png",
    },
    {
      id: 3,
      name: "Mumbai",
      bwImage: "https://realestatejobs-delta.vercel.app/cities/mumbai_black.png",
      colorImage: "https://realestatejobs-delta.vercel.app/cities/mumbai_color.png",
    },
    {
      id: 4,
      name: "Delhi NCR",
      bwImage: "https://realestatejobs-delta.vercel.app/cities/delhi_black.png",
      colorImage: "https://realestatejobs-delta.vercel.app/cities/delhi_color.png",
    },
    {
      id: 5,
      name: "Chennai",
      bwImage: "https://realestatejobs-delta.vercel.app/cities/chennai_black.png",
      colorImage: "https://realestatejobs-delta.vercel.app/cities/chennai_color.png",
    },
    {
      id: 6,
      name: "Kolkata",
      bwImage: "https://realestatejobs-delta.vercel.app/cities/kolkata_black.png",
      colorImage: "https://realestatejobs-delta.vercel.app/cities/kolkata_color.png",
    }
  ];

  return (
    <div className="py-12 rounded-lg w-full mx-auto sm:w-[80%]">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Explore Jobs by City
      </h2>
      
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 w-full px-4 mx-auto">
        {cities.map((city) => (
          <div 
            key={city.id}
            className="flex flex-col items-center cursor-pointer group"
            onMouseEnter={() => setHoveredCity(city.id)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-2">
              <img 
                alt={city.name}
                className="w-full h-full object-contain transition-all duration-300"
                src={hoveredCity === city.id ? city.colorImage : city.bwImage}
                loading="lazy"
              />
            </div>
            <div className="text-gray-900 text-center mt-2">
              <h3 className="text-xl font-semibold">{city.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesGrid;