const TopRecruiters = () => {
  // Company data array to avoid repetition
  const companies = [
    { name: "DLF Ltd.", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Honer Properties", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Brigade Group", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Cyber City.", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Jayabheri Properties", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Muppa Group", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Prestige Group", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "My Home Group.", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Radhey Properties", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Rajpushpa Group", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "NCC Ltd.", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Ramkey Group", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Lodha Group", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "Phoenix Mills", image: "/company/images.jpeg" },
    { name: "Alpha Reality", image: "https://res.cloudinary.com/dlxs9zrru/image/upload/v1765435478/users/umlpxh7bax0uish0psin.jpg" },
    { name: "OnTesting", image: "https://placehold.co/50x50/F0F0F0/1e40af?text=ONT&font=montserrat" },
    { name: "Ontesting", image: "https://placehold.co/50x50/F0F0F0/1e40af?text=ONT&font=montserrat" },
    { name: "OnTestCompany", image: "https://placehold.co/50x50/F0F0F0/1e40af?text=ONT&font=montserrat" },
    { name: "testcompany", image: "https://placehold.co/50x50/F0F0F0/1e40af?text=TES&font=montserrat" }
  ];

  // Duplicate the array for seamless infinite scroll effect
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Our Top Recruiters</h2>

      <div className="relative w-full overflow-hidden py-12 bg-transparent">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex w-max items-center h-32 animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center p-6 hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
              <img
                alt={company.name}
                className="min-h-20 w-auto object-contain"
                src={company.image}
                style={{ maxWidth: "250px", maxHeight: "115px", height: "auto", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRecruiters;

// const TopRecruiters = () => {
//   // Company data array with real image links
//   const companies = [
//     {
//       name: "DLF Ltd.",
//       image:
//         "https://1000logos.net/wp-content/uploads/2021/11/DLF-Logo-500x281.png",
//     },
//     {
//       name: "Honer Properties",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQGZZqgBrfBo0g/company-logo_200_200/company-logo_200_200/0/1631305818321?e=2147483647&v=beta&t=3T6G3sStQIVsH-3nY1Jm-lL-8jEGe0dKkL6tG3Stj_s",
//     },
//     {
//       name: "Brigade Group",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQGwA4S29ZQ2DA/company-logo_200_200/company-logo_200_200/0/1631308693992/brigade_group_logo?e=2147483647&v=beta&t=kE0N8G4wD5QyF6nW7pX8rY9sZ0aB1cD2eF3gH4iJ5k",
//     },
//     {
//       name: "Cyber City",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQG7jK8lL9mN0Q/company-logo_200_200/company-logo_200_200/0/1630672383992/dlft_cyber_city_developers_ltd_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//     {
//       name: "Jayabheri Properties",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQH1I2J3K4L5M6N/company-logo_200_200/company-logo_200_200/0/1630578945612/jayabheri_properties_pvt_ltd_logo?e=2147483647&v=beta&t=1a2B3c4D5e6F7g8H9i0J",
//     },
//     {
//       name: "Prestige Group",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQH2I3J4K5L6M7N/company-logo_200_200/company-logo_200_200/0/1630581234567/prestige_group_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//     {
//       name: "My Home Group",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQG3I4J5K6L7M8N/company-logo_200_200/company-logo_200_200/0/1630582345678/my_home_group_logo?e=2147483647&v=beta&t=1a2B3c4D5e6F7g8H9i0J",
//     },
//     {
//       name: "Lodha Group",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQG4I5J6K7L8M9N/company-logo_200_200/company-logo_200_200/0/1630583456789/lodha_group_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//     {
//       name: "Phoenix Mills",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQG5I6J7K8L9M0N/company-logo_200_200/company-logo_200_200/0/1630584567890/phoenix_mills_logo?e=2147483647&v=beta&t=1a2B3c4D5e6F7g8H9i0J",
//     },
//     {
//       name: "Godrej Properties",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQG6I7J8K9L0M1N/company-logo_200_200/company-logo_200_200/0/1630585678901/godrej_properties_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//     {
//       name: "Oberoi Realty",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQG7I8J9K0L1M2N/company-logo_200_200/company-logo_200_200/0/1630586789012/oberoi_realty_logo?e=2147483647&v=beta&t=1a2B3c4D5e6F7g8H9i0J",
//     },
//     {
//       name: "Sobha Limited",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQG8I9J0K1L2M3N/company-logo_200_200/company-logo_200_200/0/1630587890123/sobha_limited_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//     {
//       name: "Mahindra Lifespaces",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQG9I0J1K2L3M4N/company-logo_200_200/company-logo_200_200/0/1630588901234/mahindra_lifespaces_logo?e=2147483647&v=beta&t=1a2B3c4D5e6F7g8H9i0J",
//     },
//     {
//       name: "Tata Housing",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQH0I1J2K3L4M5N/company-logo_200_200/company-logo_200_200/0/1630589012345/tata_housing_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//     {
//       name: "Shapoorji Pallonji",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQH1I2J3K4L5M6N/company-logo_200_200/company-logo_200_200/0/1630590123456/shapoorji_pallonji_logo?e=2147483647&v=beta&t=1a2B3c4D5e6F7g8H9i0J",
//     },
//     {
//       name: "Hiranandani Group",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQH2I3J4K5L6M7N/company-logo_200_200/company-logo_200_200/0/1630591234567/hiranandani_group_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//     {
//       name: "Kolte-Patil",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQH3I4J5K6L7M8N/company-logo_200_200/company-logo_200_200/0/1630592345678/kolte_patil_logo?e=2147483647&v=beta&t=1a2B3c4D5e6F7g8H9i0J",
//     },
//     {
//       name: "Piramal Realty",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQH4I5J6K7L8M9N/company-logo_200_200/company-logo_200_200/0/1630593456789/piramal_realty_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//     {
//       name: "Runwal Group",
//       image:
//         "https://media.licdn.com/dms/image/v2/C560BAQH5I6J7K8L9M0N/company-logo_200_200/company-logo_200_200/0/1630594567890/runwal_group_logo?e=2147483647&v=beta&t=1a2B3c4D5e6F7g8H9i0J",
//     },
//     {
//       name: "Kalpataru Limited",
//       image:
//         "https://media.licdn.com/dms/image/v2/C4D0BAQH6I7J8K9L0M1N/company-logo_200_200/company-logo_200_200/0/1630595678901/kalpataru_limited_logo?e=2147483647&v=beta&t=1A2b3C4d5E6f7G8h9I0j",
//     },
//   ];

//   // Duplicate the array for seamless infinite scroll effect
//   const duplicatedCompanies = [...companies, ...companies, ...companies];

//   return (
//     <div className="py-12">
//       <h2 className="text-4xl font-bold text-center mb-10">
//         Our Top Recruiters
//       </h2>

//       <div className="relative w-full overflow-hidden py-12 bg-transparent">
//         {/* Gradient overlays */}
//         <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
//         <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

//         {/* Scrolling container */}
//         <div className="flex w-max items-center h-32 animate-scroll">
//           {duplicatedCompanies.map((company, index) => (
//             <div
//               key={`${company.name}-${index}`}
//               className="flex-shrink-0 mx-12 flex items-center justify-center p-6 hover:scale-110 transition-transform duration-200 cursor-pointer"
//             >
//               <img
//                 alt={company.name}
//                 className="min-h-20 w-auto object-contain"
//                 src={company.image}
//                 style={{
//                   maxWidth: "250px",
//                   maxHeight: "115px",
//                   height: "auto",
//                   width: "auto",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopRecruiters;
