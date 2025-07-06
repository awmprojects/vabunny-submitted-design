
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import LogoIcon from "./LogoIcon";

interface VaBunnyAuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const VaBunnyAuthLayout = ({ children, title, subtitle }: VaBunnyAuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <Link to="/" className="flex justify-center items-center space-x-3 mb-6">
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
        </div>

        {/* Back to Homepage Link */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-purple-600 hover:text-purple-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Homepage
          </Link>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© 2024 VaBunny.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default VaBunnyAuthLayout;
