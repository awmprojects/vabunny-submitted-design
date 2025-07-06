import { Shield, DollarSign, Globe, Clock, TrendingUp, Heart, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LogoIcon from "../LogoIcon";

const WorkersBenefits = () => {
  const benefits = [{
    icon: Shield,
    title: "100% Free to Join",
    description: "No signup fees, no membership costs, no hidden charges. Join completely free and start connecting with employers immediately.",
    highlight: "Unlike other platforms",
    color: "from-blue-500 to-purple-600"
  }, {
    icon: DollarSign,
    title: "Zero Commission Fees",
    description: "Keep 100% of what you earn! We don't take any percentage from your completed work, unlike Upwork (20%) or Fiverr (20%).",
    highlight: "You keep everything you earn",
    color: "from-green-500 to-teal-600"
  }, {
    icon: Globe,
    title: "Global Employer Network",
    description: "Connect with premium employers from the US, UK, Canada, Australia, and more who specifically seek Filipino talent.",
    highlight: "Premium international clients",
    color: "from-indigo-500 to-blue-600"
  }, {
    icon: Clock,
    title: "Full-Time Stability",
    description: "Land long-term, full-time positions with stable monthly income instead of project-based gigs. Build lasting career relationships.",
    highlight: "₱25,000 - ₱60,000+ monthly",
    color: "from-orange-500 to-red-600"
  }, {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Access to career development opportunities, skill training, and advancement paths with global companies.",
    highlight: "Grow your international career",
    color: "from-purple-500 to-pink-600"
  }, {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Enjoy the flexibility of working from home while maintaining professional growth and competitive compensation.",
    highlight: "Home-based flexibility",
    color: "from-pink-500 to-rose-600"
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">VABUNNY.COM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another freelancing platform. We're built specifically for Filipino VAs 
            to find stable, well-paying, long-term remote careers with international employers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-200 hover:-translate-y-2">
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {benefit.description}
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-3 border-l-4 border-purple-400">
                <div className="text-sm font-medium text-purple-800">
                  <span className="text-purple-600">✓</span> {benefit.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-200/50 backdrop-blur-sm overflow-hidden mb-16">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-indigo-400/15 to-violet-400/15 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                VABUNNY.COM vs Other Platforms
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See why smart Filipino VAs choose us over the competition
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative text-center p-8 bg-gradient-to-br from-white to-purple-50/50 rounded-2xl shadow-xl border-2 border-purple-200 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-br from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    BEST CHOICE
                  </div>
                  <div className="mb-4 flex justify-center">
                    <LogoIcon size="desktop" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-600 mb-4">VABUNNY.COM</h4>
                  <ul className="text-sm text-gray-700 space-y-3 mb-6">
                    <li className="flex items-center justify-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>100% Free to join</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>0% commission fees</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Full-time positions</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Direct employer relationships</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Filipino-focused platform</span>
                    </li>
                  </ul>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-3 rounded-xl text-sm font-bold border border-green-200 shadow-inner">
                    <div className="text-lg">💰 You Keep 100%</div>
                    <div className="text-xs opacity-80 mt-1">Every peso is yours!</div>
                  </div>
                </div>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-400"></div>
                <div className="text-4xl mb-4 grayscale">🌐</div>
                <h4 className="text-lg font-bold text-gray-600 mb-4">Upwork</h4>
                <ul className="text-sm text-gray-500 space-y-3 mb-6">
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Membership fees</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span>20% commission</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Project-based work</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span>High competition</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span>Generic platform</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-4 py-3 rounded-xl text-sm font-bold border border-red-200">
                  <div className="text-lg">😞 They Take 20%</div>
                  <div className="text-xs opacity-80 mt-1">Less money for you</div>
                </div>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-pink-400"></div>
                <div className="text-4xl mb-4 grayscale">💼</div>
                <h4 className="text-lg font-bold text-gray-600 mb-4">Fiverr</h4>
                <ul className="text-sm text-gray-500 space-y-3 mb-6">
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    <span>Service fees</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span>20% commission</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    <span>Gig-based model</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span>Limited earnings</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    <span>No relationship building</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-red-100 to-pink-100 text-red-800 px-4 py-3 rounded-xl text-sm font-bold border border-red-200">
                  <div className="text-lg">😞 They Take 20%</div>
                  <div className="text-xs opacity-80 mt-1">Expensive fees</div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-full px-6 py-3 shadow-lg">
                <div className="text-2xl">🎯</div>
                <span className="text-green-800 font-semibold">
                  Choose the platform that puts <strong>YOU</strong> first!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Global Career?
              </h3>
              <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful Filipino VAs who've found their dream jobs. 
                <strong className="text-white"> It's 100% FREE</strong> - no hidden fees, no commission!
              </p>
              
              <Link to="/register">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-base md:text-lg px-6 py-4 md:px-12 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                  <Users className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                  Join VaBunny FREE Today
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
                </Button>
              </Link>
              
              <div className="mt-6 text-purple-100">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm">
                  <span>✓ No signup fees</span>
                  <span className="hidden sm:inline">•</span>
                  <span>✓ No commission</span>
                  <span className="hidden sm:inline">•</span>
                  <span>✓ No hidden costs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkersBenefits;
