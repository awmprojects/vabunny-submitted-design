import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, DollarSign, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const WorkersHero = () => {
  const scrollToJobs = () => {
    // Scroll to services section on homepage
    window.location.href = "/#services";
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200">
              <div className="text-2xl">🇵🇭</div>
              <span className="text-sm font-medium text-purple-700">For Filipino Virtual Assistants</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Land Your Dream
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Global Remote Job
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Join the Philippines' premier platform for virtual assistants. Connect with top employers 
              from the US, UK, Canada, and Australia. <strong>100% FREE to join</strong> - no hidden fees, 
              no membership costs, no commission on your earnings! 🚀
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Users className="w-5 h-5 mr-2" />
                  Join Free Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/register">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 rounded-full"
                >
                  Browse Available Jobs
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Free to Join</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">0%</div>
                <div className="text-sm text-gray-600">Commission Fees</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <div className="text-sm text-gray-600">4.9/5 Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
              <img src="https://ucarecdn.com/a1c2effc-8882-4979-a762-d9a10ec01007/" alt="Filipino Virtual Assistant working remotely" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkersHero;
