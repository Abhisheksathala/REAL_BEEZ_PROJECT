import React, { useState, useRef, useEffect } from "react";
import CreateJobModal from "./CreateJob";
import CreateJobModalNormal from "./CreateJobNormal";

const DashboardMainpage = () => {
  const [activeTab, setActiveTab] = useState("Tele Caller");
  const [mobileMenuOpen, setMobileMenuOpen] = useState({});

  const tabRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });

  const jobCategories = [
    {
      name: "Tele Caller",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Engage & Convert",
      count: 2,
      jobs: [
        {
          id: "698de82811af9eb3e0d8782f",
          title: "Tele Caller",
          company: "Alpha Reality",
          logo: "https://placehold.co/80x80/F0F0F0/000000?text=Logo",
          postedDate: "Feb 12, 2026",
          location: "Hyderabad",
          experience: "Beginner (0-1 Year)",
          workType: "Office Based",
          salary: "Not specified",
          commission: "N/A",
          incentives: "25000",
          propertyTypes: ["residential", "plots"],
          languages: ["telugu", "hindi"],
          vehicle: "No",
          applications: 1,
          views: 1,
          status: "active",
          jobType: "Full time",
        },
        {
          id: "69956746863b3af755e83877",
          title: "Tele Caller",
          company: "Alpha Reality",
          logo: "https://placehold.co/80x80/F0F0F0/000000?text=Logo",
          postedDate: "Feb 18, 2026",
          location: "Hyderabad",
          experience: "Beginner (0-1 Year)",
          workType: "Office Based",
          salary: "Not specified",
          commission: "N/A",
          incentives: "N/A",
          propertyTypes: ["residential", "commercial"],
          languages: ["telugu", "hindi"],
          vehicle: "No",
          applications: 0,
          views: 0,
          status: "active",
          jobType: "Full time",
        },
      ],
    },
    {
      name: "Channel Partners",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Collaborate & Earn",
      count: 1,
    },
    {
      name: "Real Estate Sales",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Sell Property Faster",
      count: 1,
    },
    {
      name: "CRM Executive",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Manage Client Relations",
      count: 1,
    },
    {
      name: "Digital Marketing",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Promote & Convert",
      count: 1,
    },
    {
      name: "HR & Operations",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "People & Process",
      count: 0,
    },
    {
      name: "Accounts & Auditing",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Ensure Financial Clarity",
      count: 0,
    },
    {
      name: "Legal",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Safeguard Deals & Compliance",
      count: 1,
    },
    {
      name: "Architects",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Design Smart & Aesthetic Spaces",
      count: 1,
    },
    {
      name: "Web Development",
      icon: "https://imgs.search.brave.com/VdP4aV4Ix1n3nhuwcgfdz4CFZ6w6YLSXrv1b0EHXSTE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc",
      description: "Build Real Estate Tech",
      count: 0,
    },
  ];

  const toggleMobileMenu = (categoryName) => {
    setMobileMenuOpen((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  useEffect(() => {
    const activeIndex = jobCategories.findIndex(
      (cat) => cat.name === activeTab,
    );
    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      const activeTabElement = tabRefs.current[activeIndex];
      setSliderStyle({
        width: activeTabElement.offsetWidth,
        left: activeTabElement.offsetLeft,
      });
    }
  }, [activeTab]);

  const activeCategory =
    jobCategories.find((cat) => cat.name === activeTab) || jobCategories[0];

  const [isCreateJobModalOpen, setIsCreateJobModalOpen] = useState(false);
  const [isAutoCreateJobModalOpen, setIsAutoCreateJobModalOpen] =
    useState(false);

  const handleOpenAutoCreateJob = () => {
    setIsAutoCreateJobModalOpen(true);
  };

  const handleOpenCreateJob = () => {
    setIsCreateJobModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsCreateJobModalOpen(false);
    setIsAutoCreateJobModalOpen(false);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans py-2">
        {/* Desktop Header */}
        <div className="hidden sm:flex flex-col text-sm w-full z-10 bg-white shadow text-center">
          {/* Desktop Tabs */}
          <div className="w-full px-1 mx-auto">
            <div className="flex flex-row gap-5 bg-white rounded-t-md relative overflow-scroll scroll-x-auto sm:overflow-hidden">
              <span
                className="absolute bottom-0 h-full bg-indigo-900 rounded-t-md transition-all duration-600 ease-in-out z-0"
                style={{
                  width: `${sliderStyle.width}px`,
                  left: `${sliderStyle.left}px`,
                  pointerEvents: "none",
                }}
              />

              {jobCategories.map((category, index) => (
                <button
                  key={category.name}
                  ref={(el) => (tabRefs.current[index] = el)} // ← add this line
                  onClick={() => setActiveTab(category.name)}
                  className={`py-1 px-3 rounded-t-md relative font-medium z-10 transition-colors duration-300 ease-in-out ${
                    activeTab === category.name ? "text-white" : "text-gray-700"
                  }`}
                >
                  <span className="flex flex-wrap items-center justify-center gap-1">
                    <span>
                      <div className="flex flex-wrap items-center gap-2 text-left">
                        <div className="flex flex-col relative">
                          <img
                            alt={category.name}
                            className="h-12 w-auto object-contain mx-auto"
                            src={category.icon}
                          />
                          <span className="text-sm font-semibold">
                            {category.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {category.description}
                          </span>
                          {category.count > 0 && (
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {category.count}
                            </span>
                          )}
                        </div>
                      </div>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-800">
              {activeTab} Jobs
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {activeCategory.count}{" "}
              {activeCategory.count === 1 ? "job" : "jobs"} found in {activeTab}{" "}
              category
            </p>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          {jobCategories.map((category) => (
            <div key={category.name} className="border-b border-gray-200">
              <button
                onClick={() => toggleMobileMenu(category.name)}
                className="w-full flex justify-between items-center py-3 px-4 bg-white text-left"
              >
                <div className="flex flex-col items-start">
                  <span className="font-medium text-sm text-gray-800 text-base truncate">
                    {category.name}
                  </span>
                  {category.count > 0 && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1">
                      {category.count} {category.count === 1 ? "job" : "jobs"}
                    </span>
                  )}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    mobileMenuOpen[category.name] ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Job Table */}
        <div className="hidden sm:flex w-full">
          <div className="w-full max-w-7xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                {activeTab} Jobs
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={handleOpenAutoCreateJob}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-2 sm:px-6 sm:py-3 rounded-sm sm:rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-md">Auto Create Job</span>
                </button>
                <button
                  onClick={handleOpenCreateJob}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 sm:px-6 sm:py-3 rounded-sm sm:rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-md">Create Job</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Job Details
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Location & Experience
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Salary & Commission
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Requirements
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Applications
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {activeCategory.jobs?.map((job) => (
                      <tr
                        key={job.id}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                alt=""
                                className="h-8 w-auto object-contain mx-auto"
                                src={job.logo}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {job.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {job.company}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                Posted: {job.postedDate}
                              </div>
                              <div className="text-xs text-gray-500">
                                ID: {job.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {job.location}
                          </div>
                          <div className="text-sm text-gray-500">
                            {job.experience}
                          </div>
                          <div className="text-xs text-gray-400">
                            {job.workType}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {job.salary}
                          </div>
                          <div className="text-sm text-gray-500">
                            Commission: {job.commission}
                          </div>
                          <div className="text-xs text-gray-400">
                            Incentives: {job.incentives}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 space-y-1">
                            <div className="flex items-center space-x-1">
                              <span className="text-xs">Property:</span>
                              <span className="text-xs font-medium">
                                {job.propertyTypes.join(", ")}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="text-xs">Languages:</span>
                              <span className="text-xs font-medium">
                                {job.languages.join(", ")}...
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="text-xs">Vehicle:</span>
                              <span className="text-xs font-medium">
                                {job.vehicle}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium">
                            {job.applications}
                          </div>
                          <div className="text-xs text-gray-500">
                            Applications
                          </div>
                          <div className="text-xs text-gray-400">
                            Views: {job.views}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {job.status}
                          </span>
                          <div className="text-xs text-gray-500 mt-1">
                            {job.jobType}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              className="text-green-600 hover:text-green-900 transition-colors duration-200"
                              title="Edit Job"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                              </svg>
                            </button>
                            <button
                              className="text-red-600 hover:text-red-900 transition-colors duration-200"
                              title="Delete Job"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Showing{" "}
                    <span className="font-medium">
                      {activeCategory.jobs?.length || 0}
                    </span>{" "}
                    jobs
                  </div>
                  <div className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateJobModal
       className="overflow-hidden" 
        isOpen={isAutoCreateJobModalOpen}
        onClose={handleCloseModals}
      />
      <CreateJobModalNormal
       className="overflow-hidden" 
        isOpen={isCreateJobModalOpen}
        onClose={handleCloseModals}
      />
    </>
  );
};

export default DashboardMainpage;
