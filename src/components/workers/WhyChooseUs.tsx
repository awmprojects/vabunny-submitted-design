
import { Building, Users, MapPin, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const stats = [
    { number: "2,500+", label: "Active Job Opportunities", icon: Building },
    { number: "850+", label: "Successful Placements", icon: Users },
    { number: "15+", label: "Countries Hiring", icon: MapPin },
    { number: "₱42,000", label: "Average Monthly Salary", icon: TrendingUp }
  ];

  const countries = [
    { flag: "🇺🇸", name: "United States", jobs: "850+ positions" },
    { flag: "🇬🇧", name: "United Kingdom", jobs: "320+ positions" },
    { flag: "🇨🇦", name: "Canada", jobs: "280+ positions" },
    { flag: "🇦🇺", name: "Australia", jobs: "190+ positions" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-lavender-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Join Thousands of Successful
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Filipino VAs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our platform connects talented Filipino virtual assistants with premium employers 
            worldwide, creating lasting partnerships that benefit everyone.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 shadow-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-purple-100 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Connect with Global Employers
            </h3>
            <p className="text-lg text-gray-600">
              Work with premium companies from these top countries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-md border border-purple-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-3">{country.flag}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{country.name}</h4>
                <p className="text-sm text-purple-600 font-medium">{country.jobs}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Range Section */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Competitive Salary Ranges
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Based on actual placements from our platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold mb-2">₱25,000 - ₱35,000</div>
              <div className="text-sm opacity-90">Entry Level VAs</div>
              <div className="text-xs mt-2 opacity-75">General Admin, Data Entry, Customer Service</div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border-2 border-white/50">
              <div className="text-2xl font-bold mb-2">₱35,000 - ₱50,000</div>
              <div className="text-sm">Experienced VAs</div>
              <div className="text-xs mt-2 opacity-75">Marketing, Executive Assistant, Project Management</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold mb-2">₱50,000+</div>
              <div className="text-sm opacity-90">Specialized VAs</div>
              <div className="text-xs mt-2 opacity-75">Technical, Creative, Management Roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
