

const RecruitmentServices = () => {
  // Services data array
  const services = [
    {
      title: "Ai Talent Pool",
      description: "Procurement of talent as per market Predictions.",
      image: "https://realestatejobs-delta.vercel.app/ourservices/layer_3.png",
      alt: "Ai Talent Pool"
    },
    {
      title: "AI Recruit",
      description: "real time Ai Recruitor to Increase Accuracy for hire.",
      image: "https://realestatejobs-delta.vercel.app/ourservices/layer_2.png",
      alt: "AI Recruit"
    },
    {
      title: "Ai Jobs Search",
      description: "For better enhanced recruitment services.",
      image: "https://realestatejobs-delta.vercel.app/ourservices/layer_1.png",
      alt: "Ai Jobs Search"
    }
  ];

  return (
    <div className="py-8 w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mt-10 text-gray-800">
        Our Recruitment Services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex w-full h-80 justify-center mb-4">
              <img 
                alt={service.alt}
                className="w-full h-80 object-cover"
                src={service.image}
              />
            </div>
            
            <div className="p-2">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500">
                {service.description}
              </p>
            </div>
            
            <div className="my-3">
              <button 
                className="bg-orange-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 hover:bg-orange-800"
              >
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentServices;