import React from 'react';

const JobCategories = () => {
  const categories = [
    { 
      id: 1, 
      title: "Tele Caller", 
      description: "Engage & Convert", 
      bgColor: "bg-blue-500", 
      image: "https://realestatejobs-delta.vercel.app/icons/tel.png"
    },
    { 
      id: 2, 
      title: "Channel Partners", 
      description: "Collaborate & Earn", 
      bgColor: "bg-green-500",
      image: "https://realestatejobs-delta.vercel.app/icons/cp.png"
    },
    { 
      id: 3, 
      title: "Real Estate Sales", 
      description: "Sell Property Faster", 
      bgColor: "bg-yellow-500",
      image: "https://realestatejobs-delta.vercel.app/icons/realestate.png"
    },
    { 
      id: 4, 
      title: "CRM Executive", 
      description: "Manage Client Relations", 
      bgColor: "bg-purple-500",
      image: "https://realestatejobs-delta.vercel.app/icons/crm.png"
    },
    { 
      id: 5, 
      title: "Digital Marketing", 
      description: "Promote & Convert", 
      bgColor: "bg-pink-500",
      image: "https://realestatejobs-delta.vercel.app/icons/digital.png"
    },
    { 
      id: 6, 
      title: "HR & Operations", 
      description: "People & Process", 
      bgColor: "bg-red-500",
      image: "https://realestatejobs-delta.vercel.app/icons/hrandop.png"
    },
    { 
      id: 7, 
      title: "Accounts & Auditing", 
      description: "Ensure Financial Clarity", 
      bgColor: "bg-teal-500",
      image: "https://realestatejobs-delta.vercel.app/icons/accounts.png"
    },
    { 
      id: 8, 
      title: "Legal", 
      description: "Safeguard Deals & Compliance", 
      bgColor: "bg-indigo-500",
      image: "https://realestatejobs-delta.vercel.app/icons/legal.png"
    },
    { 
      id: 9, 
      title: "Architects", 
      description: "Design Smart & Aesthetic Spaces", 
      bgColor: "bg-purple-600",
      image: "https://realestatejobs-delta.vercel.app/icons/architects.png"
    },
    { 
      id: 10, 
      title: "Web Development", 
      description: "Build Real Estate Tech", 
      bgColor: "bg-cyan-500",
      image: "https://realestatejobs-delta.vercel.app/icons/webdev.png"
    }
  ];

  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-center w-full mx-auto sm:w-[80%]">
        <h1 className="text-4xl sm:text-3xl font-normal text-gray-700 mb-10 text-center">
          Click to unlock your <span className="font-semibold text-gray-900">Dream Real Estate Jobs</span> below
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 w-full mt-5">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="flex flex-col group p-4 bg-white rounded-xl shadow-md hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer text-center"
            >
              <div className="flex justify-center mb-3">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 group-hover:text-white">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategories;