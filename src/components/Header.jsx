import React, { useState } from "react";
import { FiHome, FiAward, FiHelpCircle, FiGrid, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      
      <header className="hidden md:flex fixed top-0 left-0 right-0 items-center h-20 px-6 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50">
        <div className="flex-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            BrainyLingo
          </h1>
        </div>

        <nav className="flex flex-2 justify-center space-x-6 lg:space-x-12">
          <NavLink href="#home" icon={<FiHome />}>
            Home
          </NavLink>
          <NavLink href="#leaderboard" icon={<FiAward />}>
            Leaderboard
          </NavLink>
          <NavLink href="#dailyquiz" icon={<FiHelpCircle />}>
            Daily Quiz
          </NavLink>
          <NavLink href="#genre" icon={<FiGrid />}>
            Genre
          </NavLink>
        </nav>

        <div className="flex-1 flex justify-end">
          <button className="relative px-4 py-2 lg:px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium overflow-hidden group">
            <span className="relative z-10">Sign Out</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </header>

      
      <header className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between h-16 px-4 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          BrainyLingo
        </h1>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

     
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40 animate-slideDown">
          <div className="flex flex-col py-4">
            <MobileNavLink href="#home" icon={<FiHome />} onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#leaderboard" icon={<FiAward />} onClick={() => setMobileMenuOpen(false)}>
              Leaderboard
            </MobileNavLink>
            <MobileNavLink href="#dailyquiz" icon={<FiHelpCircle />} onClick={() => setMobileMenuOpen(false)}>
              Daily Quiz
            </MobileNavLink>
            <MobileNavLink href="#genre" icon={<FiGrid />} onClick={() => setMobileMenuOpen(false)}>
              Genre
            </MobileNavLink>
            
            <div className="px-4 py-3 mt-2">
              <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


const NavLink = ({ href, icon, children }) => {
  return (
    <a 
      href={href} 
      className="relative group flex items-center px-2 py-1 text-gray-700 hover:text-black transition-colors duration-300"
    >
      <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">
        {icon}
      </span>
      <span>{children}</span>
      <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
    </a>
  );
};


const MobileNavLink = ({ href, icon, children, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
    >
      <span className="mr-3 text-gray-500">
        {icon}
      </span>
      <span>{children}</span>
    </a>
  );
};

export default Header;