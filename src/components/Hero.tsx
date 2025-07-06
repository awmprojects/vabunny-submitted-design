
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, TrendingUp, Globe, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-lavender-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Trusted by 850+ businesses worldwide</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Hire Skilled Filipino
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Virtual Assistants
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Scale your business with world-class Filipino virtual assistants starting at just $500/month. 
              Get fluent English speakers, exceptional work ethic, and 24/7 coverage that transforms your operations! 🇵🇭
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Users className="w-5 h-5 mr-2" />
                  Find Your Perfect VA
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 rounded-full">
                  Browse VA Profiles
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2,500+</div>
                <div className="text-sm text-gray-600">Available VAs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">850+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
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
            <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
              <img 
                src="https://ucarecdn.com/83ecb7f2-eca5-4304-977c-3223d20875bf/" 
                alt="VABunny Virtual Assistants" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
