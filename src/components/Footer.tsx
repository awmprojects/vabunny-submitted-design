


import { Users, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-100 via-violet-50 to-indigo-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <LogoIcon size="mobile" />
                {/* Design accent */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-2 h-2 text-white" />
                </div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="text-xl font-black bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent tracking-tight">VABUNNY.COM</span>
                </div>
                <span className="text-xs font-semibold text-purple-600 -mt-1 tracking-widest uppercase">
                  Virtual Assistants
                </span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Connecting Filipino virtual assistant talent with businesses worldwide. Find skilled VAs or land your dream remote job.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">For Businesses</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">Find VAs</Link></li>
              <li><Link to="/free-gift" className="text-gray-600 hover:text-purple-600 transition-colors">Free Gift</Link></li>
              <li><Link to="/newsletter" className="text-gray-600 hover:text-purple-600 transition-colors">Newsletter</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/dashboard/employer/affiliate" className="text-gray-600 hover:text-purple-600 transition-colors">Affiliate Program</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-purple-600 transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">For VAs</h3>
            <ul className="space-y-3">
              <li><Link to="/for-workers" className="text-gray-600 hover:text-purple-600 transition-colors">For Workers</Link></li>
              <li><Link to="/register" className="text-gray-600 hover:text-purple-600 transition-colors">Create Profile</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-purple-600 transition-colors">VA Dashboard</Link></li>
              <li><Link to="/scholarship" className="text-gray-600 hover:text-purple-600 transition-colors">Scholarship</Link></li>
              <li><Link to="/dashboard/worker/affiliate" className="text-gray-600 hover:text-purple-600 transition-colors">Affiliate Program</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-purple-600 transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-600" />
                <span className="text-gray-600">info@vabunny.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 VABunny.com. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Connecting Filipino talent with global opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


