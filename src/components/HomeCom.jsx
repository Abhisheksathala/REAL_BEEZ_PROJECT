import React, { useState, useEffect } from 'react';

const HomeCar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "https://imgs.search.brave.com/Sxeu9nHiTNmXwzFKu6L9EnQRCqm5BfAw0icVLzzRdRM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/NjQ4LzQxMC9zbWFs/bC9vZi1hLWhvdXNl/LW1vZGVsLXB1dHRp/bmctb24tYS1jbGlw/Ym9hcmQtYXQtdGhl/LXdvb2Rlbi13b3Jr/aW5nLWRlc2stb3Zl/ci1hLXJlYWwtZXN0/YXRlLXVzaW5nLWEt/Y29tcHV0ZXItbGFw/dG9wLWFzLWEtYmFj/a2dyb3VuZC1mcmVl/LXBob3RvLmpwZw",
      title: "First Slide"
    },
    {
      id: 2,
      image: "https://imgs.search.brave.com/Lki1UJUsedZGWuT-3Q8y-cwjKoEoKLAM1m46ni1tRqU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9yZWFs/LWVzdGF0ZS1hZ2Vu/dC1vZmZlci1ob3Vz/ZS1yZXByZXNlbnRl/ZC1tb2RlbC13aWRl/LWJhbm5lci1jb21w/b3NpdGlvbi02NTA4/MjU0Ny5qcGc",
      title: "Second Slide"
    },
    {
      id: 3,
      image: "https://imgs.search.brave.com/XLMxTvuiA1xhK_ddwJhgsJTtsTlmY6PiSd3UedDrAPQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHRkhO/ODFKVEkvMi8wLzE2/MDB3L2NhbnZhLXdo/aXRlLW1pbmltYWxp/c3QtYnVzaW5lc3Mt/cmVhbC1lc3RhdGUt/ZmFjZWJvb2stY292/ZXItU1AteE9JaDVL/UzAuanBn",
      title: "Third Slide"
    },
    {
      id: 3,
      image: "https://imgs.search.brave.com/6rOFFuYnf2wjyuv3Lnk7u8SCvC50hggxBLvW_BLAcYI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbXVzZS5jb20v/X25leHQvaW1hZ2U_/dXJsPWh0dHBzOi8v/Y21zLWFzc2V0cy50/aGVtdXNlLmNvbS9t/ZWRpYS9sZWFkL3do/YXQtaXMtcmVhbC1l/c3RhdGUucG5nJnc9/Mzg0MCZxPTc1",
      title: "Third Slide"
    },
    {
      id: 3,
      image: "https://imgs.search.brave.com/LI46LeiWGjxdmD4efB0Fy50scDt3TEXnyUscQ-UvUtU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vdmFyaWFu/dHMvSHRSZDJBUmRE/eUVMcEJkR1hETDNm/ZHRULzYyNGYwZGMx/ZGZmOWJkY2NhYjAz/MmY5M2MzM2U3OWRl/Nzg0ODE3NzBlNzll/MjFkM2IwNDY5ZGFm/NTFmMDI3OTc",
      title: "Third Slide"
    },
    {
      id: 3,
      image: "https://imgs.search.brave.com/Gn9PDI46mzY4LDMokIOlbnIuCiNsI5NsMnBUbdt8rII/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMzg4OTE5/My83MDg2L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNzA4NjEyMzkt/c3RvY2stcGhvdG8t/cmVhbC1lc3RhdGUt/YWdlbnQtd2l0aC1o/b3VzZS5qcGc",
      title: "Third Slide"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-screen  max-auto mt-[4.1rem] p-4">
      {/* Main Carousel Container */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        {/* Carousel Wrapper */}
        <div className="relative h-80 md:h-96">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                className="object-cover w-full h-full"
                alt={`Slide ${index + 1}`}
              />
              {/* <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl bg-black/30 px-4 py-2 rounded">
                {slide.title}
              </span> */}
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full focus:outline-none transition-all duration-300 transform -translate-y-1/2"
          aria-label="Previous slide"
        >
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full focus:outline-none transition-all duration-300 transform -translate-y-1/2"
          aria-label="Next slide"
        >
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeCar;