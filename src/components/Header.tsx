
import { Button } from "@/components/ui/button";
import { Rabbit, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <LogoIcon size="desktop" />
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-black bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                  VABUNNY.COM
                </span>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent -mt-1 tracking-widest uppercase">
                Virtual Assistants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Find VAs
            </Link>
            <Link to="/for-workers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Find a Job
            </Link>
            <Link to="/free-gift" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Free Gift
            </Link>
            <Link to="/scholarship" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Scholarship
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white">
                <Rabbit className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-purple-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Find VAs
              </Link>
              <Link to="/for-workers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Find a Job
              </Link>
              <Link to="/free-gift" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Free Gift
              </Link>
              <Link to="/scholarship" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Scholarship
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white">
                    <Rabbit className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
