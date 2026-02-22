import React, { useRef, useState } from 'react';

const CityJobsSectionTailwind = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);

  const cities = [
    {
      name: 'Bangalore',
      jobs: 2,
      image: 'https://up.yimg.com/ib/th/id/OIP.rjen75bz9ZydUlTQ8vruoQHaE6?pid=Api&rs=1&c=1&qlt=95&w=154&h=102',
      alt: 'Bangalore',
      video: '/images/video.mp4' // Local video file
    },
    {
      name: 'Hyderabad',
      jobs: 12,
      image: 'https://tse1.mm.bing.net/th/id/OIP.7IrJMGZmyQZaalL-laIdNwHaE5?pid=Api&P=0&h=180',
      alt: 'Hyderabad',
      video: '/images/video.mp4' // Local video file
    },
    {
      name: 'Mumbai',
      jobs: 7,
      image: 'https://tse3.mm.bing.net/th/id/OIP.ctjxLFlGySEbcYHrBxM48gHaEo?pid=Api&P=0&h=180',
      alt: 'Mumbai',
      video: '/images/video.mp4'// Local video file
    },
    {
      name: 'Kolkata',
      jobs: 2,
      image: 'https://tse3.mm.bing.net/th/id/OIP.ejh_ucYInNi9WKKkEWORogHaEW?pid=Api&P=0&h=180',
      alt: 'Kolkata',
      video: '/images/video.mp4'// Local video file
    },
    {
      name: 'Delhi NCR',
      jobs: 2,
      image: 'https://realestatejobs-delta.vercel.app/icons/tel.png',
      alt: 'Delhi NCR',
      video: '/images/video.mp4' // Local video file
    },
    {
      name: 'Chennai',
      jobs: 5,
      image: 'https://via.placeholder.com/400x300?text=Chennai',
      alt: 'Chennai',
      video:'/images/video.mp4' // Local video file
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600 tracking-wider mb-2 uppercase">
        TOP CITIES
      </p>
      <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
        Explore Jobs by City
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative rounded-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden aspect-video group cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Local Video (shown on hover) */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
              <video
                ref={el => videoRefs.current[index] = el}
                src={city.video}
                className="w-full h-full object-cover pointer-events-none"
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* Static Image (shown when not hovered) */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
              {city.image && (
                <img
                  alt={city.alt}
                  loading="lazy"
                  decoding="async"
                  src={city.image}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=City+Image';
                  }}
                />
              )}
            </div>
            
            {/* Overlay with text (always visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white flex justify-between items-end z-10">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-1 drop-shadow-lg">
                  {city.name}
                </h4>
                <p className="text-xs sm:text-sm opacity-90 drop-shadow">
                  {city.jobs} {city.jobs === 1 ? 'Job' : 'Jobs'} Available
                </p>
              </div>
              
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xl sm:text-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 drop-shadow-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>

            {/* Play button indicator on hover */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} z-20`}>
              <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm">
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityJobsSectionTailwind;