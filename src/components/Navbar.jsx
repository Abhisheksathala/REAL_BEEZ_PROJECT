import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notificationCount] = useState(8);
  const [user] = useState({
    name: "Bheema",
    role: "applicant",
    initial: "B",
  });

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full px-4 sm:px-6 z-50">
      <div className="flex h-20 sm:h-20 items-center justify-between gap-4">
        {/* Logo with static image placeholder */}
        <a href="/" className="flex items-center">
          <img
            alt="Company Logo"
            width="150"
            height="40"
            className="object-cover"
            src="/images/Realbee.png"
            style={{ color: "transparent" }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4 h-full flex-1 justify-end">
          <NavLink href="/" active={true}>
            Home
          </NavLink>
          <NavLink href="/about">About Us</NavLink>
          <MobileNavLink className="bg-black px-4 py-2" href="/dashboard">
            Post a New job{" "}
          </MobileNavLink>
          {/* <NavLink href="/companies">Companies</NavLink>
          <NavLink href="/jobs">Jobs</NavLink> */}

          {/* Notification Bell */}
          <div className="relative">
            <button
              className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
              aria-label="Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              {notificationCount > 0 && (
                <span className="absolute -top-0 -right-1 bg-red-500 text-white text-[11px] rounded-full w-4 h-4 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>

          {/* User Menu */}
          <div className="relative no-focus-outline z-[99999]">
            <button className="flex items-center gap-1 cursor-pointer">
              {/* Mobile user icon */}
              <div className="sm:hidden w-6 h-6 rounded-full bg-indigo-900 text-white flex items-center justify-center font-semibold">
                {user.initial}
              </div>

              {/* Desktop user info */}
              <div className="hidden sm:flex flex-col capitalize">
                <p className="font-semibold flex items-center">
                  {user.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400 hidden sm:block ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </p>
                <p className="text-gray-500 text-xs text-right">{user.role}</p>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden py-4 border-t">
          <MobileNavLink href="/" active={true}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about">About Us</MobileNavLink>
          <MobileNavLink className="bg-black px-4 py-2" href="/dashboard">
            Post a New job{" "}
          </MobileNavLink>
          {/* <MobileNavLink href="/companies">Companies</MobileNavLink>
          <MobileNavLink href="/jobs">Jobs</MobileNavLink> */}

          {/* Mobile user section */}
          <div className="px-2 py-3 border-t mt-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center font-semibold">
                {user.initial}
              </div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500 text-xs">{user.role}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ href, children, active = false }) => {
  const baseClasses =
    "relative flex items-center h-full px-2 font-medium transition";
  const activeClasses = active
    ? "text-purple-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-purple-600"
    : "text-gray-700 hover:text-purple-600";

  return (
    <a href={href} className={`${baseClasses} ${activeClasses}`}>
      {children}
    </a>
  );
};

// Mobile navigation link component
const MobileNavLink = ({ href, children, active = false }) => {
  return (
    <a
      href={href}
      className={`block px-2 py-3 font-medium transition ${
        active
          ? "text-purple-600 bg-purple-50"
          : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
      }`}
    >
      {children}
    </a>
  );
};

export default Navbar;
