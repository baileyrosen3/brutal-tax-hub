import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 hover:text-gray-900"
            >
              Golf Software Agency
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Strategic Analysis
              </Link>
              <Link
                to="/competitive-analysis"
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Competitive Analysis
              </Link>
              <Link
                to="/innovative-solutions"
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Innovative Solutions
              </Link>
              <Link
                to="/decision-making"
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Decision Making
              </Link>
              <Link
                to="/implementation-roadmap"
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Implementation Roadmap
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
