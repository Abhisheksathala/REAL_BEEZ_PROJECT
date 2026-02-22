import { useState } from 'react';

const ExclusiveServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slides data array
  const slides = [
    {
      id: 1,
      image: "/images/add5.webp",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/images/slide4.webp",
      alt: "Slide 2"
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

  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Exclusive Services
      </h2>
      
      <div className="mx-auto w-full sm:w-[80%] rounded-lg mt-20">
        <div className="relative w-full overflow-hidden rounded-lg" style={{ height: "200px" }}>
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out rounded-lg ${
                  index === currentSlide 
                    ? 'translate-x-0' 
                    : index < currentSlide 
                      ? '-translate-x-full' 
                      : 'translate-x-full'
                }`}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <img
                    alt={slide.alt}
                    loading="eager"
                    decoding="async"
                    className="rounded-lg object-cover w-full h-full"
                    src={slide.image}
                    style={{ 
                      position: "absolute", 
                      height: "100%", 
                      width: "100%", 
                      inset: "0px", 
                      objectFit: "cover", 
                      objectPosition: "center center",
                      color: "transparent" 
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    srcSet={`${slide.image}?w=128&q=75 128w, ${slide.image}?w=256&q=75 256w, ${slide.image}?w=340&q=75 340w, ${slide.image}?w=384&q=75 384w, ${slide.image}?w=640&q=75 640w, ${slide.image}?w=768&q=75 768w, ${slide.image}?w=1024&q=75 1024w, ${slide.image}?w=1200&q=75 1200w, ${slide.image}?w=1920&q=75 1920w`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveServices;