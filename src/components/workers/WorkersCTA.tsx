import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, DollarSign, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const WorkersCTA = () => {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Sign up completely free - no hidden fees or membership costs",
      icon: Users
    },
    {
      number: "2", 
      title: "Browse Premium Jobs",
      description: "Access exclusive full-time positions from US, UK, Canada & Australia",
      icon: Globe
    },
    {
      number: "3",
      title: "Start Earning 100%",
      description: "Keep every peso you earn - no commission fees taken from your work",
      icon: DollarSign
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-lavender-50">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Start Your
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Global Career?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of successful Filipino virtual assistants who've found their 
            dream remote careers. <strong>100% free to join, 0% commission fees!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <span className="text-center">Join Free Today - No Fees Ever!</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 mb-16">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              100% Free Forever
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Zero Commission Fees
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Global Opportunities
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get Started in 3 Simple Steps
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final highlight box - Updated for better compatibility */}
        <div className="bg-gradient-to-br from-white via-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-200 text-center relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-4xl md:text-5xl mb-6">🎉</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Don't Let Other Platforms Take Your Hard-Earned Money!
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              While Upwork and Fiverr charge up to 20% commission on your earnings, 
              VABunny.com lets you keep 100% of what you earn. That's an extra 
              <strong className="text-green-600 font-semibold"> ₱8,000+ per month </strong> 
              in your pocket!
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm border-2 border-red-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-red-600 mb-3 text-lg">Other Platforms</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p className="text-base">₱40,000 earned</p>
                  <p className="text-red-500">- 20% fees (₱8,000)</p>
                  <hr className="border-red-200 my-2" />
                  <p className="text-red-600 font-bold text-lg">₱32,000 take home</p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  BEST
                </div>
                <h4 className="font-bold text-green-600 mb-3 text-lg">VABunny.com</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p className="text-base">₱40,000 earned</p>
                  <p className="text-green-500">- 0% fees (₱0)</p>
                  <hr className="border-green-200 my-2" />
                  <p className="text-green-600 font-bold text-lg">₱40,000 take home</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-purple-200">
              <p className="text-purple-700 font-medium text-lg">
                💰 That's <span className="text-2xl font-bold text-green-600">₱96,000 extra per year</span> in your pocket!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkersCTA;
