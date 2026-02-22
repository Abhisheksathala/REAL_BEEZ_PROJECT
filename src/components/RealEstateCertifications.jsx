import React, { useEffect, useRef, useState } from 'react';

const CertificationsInfiniteCarousel = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const programs = [
    {
      id: 1,
      title: "MICA's Advanced Certificate In Digital Marketing and Communication",
      institute: "MICA",
      image: "https://imgs.search.brave.com/wmicxq8Z2RmQHijs99U769uFDm08DYLL2aAdH9OUlws/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJpbmNldG9ucmV2/aWV3LmNvbS9jbXMt/Y29udGVudC9Db2xs/ZWdlSHViX2Jlc3Ry/ZWdpb25hbC5wbmc",
      duration: "31 Weeks",
      feature: "1-1 Mentorship & Job Support"
    },
    {
      id: 2,
      title: "Post Graduate Certificate in Data Science & AI (Executive)",
      institute: "IITB",
      image: "https://imgs.search.brave.com/wmicxq8Z2RmQHijs99U769uFDm08DYLL2aAdH9OUlws/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJpbmNldG9ucmV2/aWV3LmNvbS9jbXMt/Y29udGVudC9Db2xs/ZWdlSHViX2Jlc3Ry/ZWdpb25hbC5wbmc",
      duration: "8-8.5 Months",
      feature: "Exclusive Job Portal"
    },
    {
      id: 3,
      title: "Post Graduate Certificate in Machine Learning and Deep Learning (Executive)",
      institute: "IITB",
      image: "https://imgs.search.brave.com/wmicxq8Z2RmQHijs99U769uFDm08DYLL2aAdH9OUlws/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJpbmNldG9ucmV2/aWV3LmNvbS9jbXMt/Y29udGVudC9Db2xs/ZWdlSHViX2Jlc3Ry/ZWdpb25hbC5wbmc",
      duration: "8 Months",
      feature: "5+ Industry Projects, Case Studies"
    },
    {
      id: 4,
      title: "MICA's Advanced Certificate In Digital Marketing and Communication",
      institute: "MICA",
      image: "https://imgs.search.brave.com/wmicxq8Z2RmQHijs99U769uFDm08DYLL2aAdH9OUlws/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJpbmNldG9ucmV2/aWV3LmNvbS9jbXMt/Y29udGVudC9Db2xs/ZWdlSHViX2Jlc3Ry/ZWdpb25hbC5wbmc",
      duration: "31 Weeks",
      feature: "1-1 Mentorship & Job Support"
    },
    {
      id: 5,
      title: "Post Graduate Certificate in Data Science & AI (Executive)",
      institute: "IITB",
      image: "https://imgs.search.brave.com/wmicxq8Z2RmQHijs99U769uFDm08DYLL2aAdH9OUlws/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJpbmNldG9ucmV2/aWV3LmNvbS9jbXMt/Y29udGVudC9Db2xs/ZWdlSHViX2Jlc3Ry/ZWdpb25hbC5wbmc",
      duration: "8-8.5 Months",
      feature: "Exclusive Job Portal"
    },
    {
      id: 6,
      title: "Post Graduate Certificate in Machine Learning and Deep Learning (Executive)",
      institute: "IITB",
      image: "https://imgs.search.brave.com/wmicxq8Z2RmQHijs99U769uFDm08DYLL2aAdH9OUlws/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJpbmNldG9ucmV2/aWV3LmNvbS9jbXMt/Y29udGVudC9Db2xs/ZWdlSHViX2Jlc3Ry/ZWdpb25hbC5wbmc",
      duration: "8 Months",
      feature: "5+ Industry Projects, Case Studies"
    }
  ];

  // Triple the programs for seamless infinite scroll
  const allPrograms = [...programs, ...programs, ...programs];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    const scrollSpeed = 0.5; // pixels per frame - slower for smoother animation

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to beginning when we've scrolled through one set
        if (scrollContainer.scrollLeft >= programs.length * 384) { // 384px is card width (w-96 = 24rem = 384px)
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, programs.length]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Real Estate Certifications Programs
      </h3>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Carousel container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {allPrograms.map((program, index) => (
            <div
              key={`${program.id}-${index}`}
              className="w-96 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                  src={program.image}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Program';
                  }}
                />
                
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-xl font-semibold mb-2 line-clamp-2">
                    {program.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-2">
                    {program.institute}
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-500 text-sm my-2">
                    <li>{program.duration}</li>
                    <li>{program.feature}</li>
                  </ul>
                  
                  <div className="mt-auto flex justify-between pt-4">
                    <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 hover:bg-purple-200">
                      View Syllabus
                    </button>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 hover:bg-purple-800">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Scroll speed controls */}
      {/* <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-medium text-sm hover:bg-purple-200 transition-colors"
        >
          {isPaused ? '▶️ Play' : '⏸️ Pause'}
        </button>
      </div> */}

      <style jsx>{`
        /* Hide scrollbar but keep functionality */
        .overflow-x-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CertificationsInfiniteCarousel;